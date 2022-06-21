import type { ResponseTaskArrayType, TaskType, TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getDraggedPosition } from '../Positions/getDraggedPosition'
import { cloneDeep as _cloneDeep } from 'lodash'

export const updateTaskPositionToApi = (event: any) => {
  const draggableElement: TaskType = event.item.__draggable_context.element
  const toParentElement: TaskType[] = event.to.parentElement.__draggable_context.element.tasks
  const getParentId: number =  event.to.parentElement.__draggable_context.element.id

  const { newPosition, is_samePosition } = getDraggedPosition('task', event)


  if (is_samePosition === false)
  {
    console.log("position重なってない")
    /* positionが重なっていないときの処理 */
    const updateTaskData: TaskType = _cloneDeep(draggableElement)

    updateTaskData.task_position = newPosition
    updateTaskData.title_id = getParentId


    /* API通信 */
    axios.patch('/api/todo/task/' + updateTaskData.id + '/patch', updateTaskData)
    .then((response: AxiosResponse<TaskType>) => {
      const updateTask = draggableElement
      Object.assign(updateTask, response.data)
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
  else
  {
    console.log("position重なってる")
    /* positionが重なっているときの処理 */

    /* positionをふり直す */
    const updateTasksList = _cloneDeep(toParentElement)

    const ids = (updateTasksList.map(tasks => tasks.id)).join('-')
    
    const updatePositionList = updateTasksList.map((tasks, index) => {
      tasks.task_position = (index + 1) * 1024
      return tasks
    })


    /* API通信 */
    axios.patch('/api/todo/task/' + ids + '/patch', {
      updatePositionList: updatePositionList
    })
    .then((response: AxiosResponse<ResponseTaskArrayType>) => {
      const updateTasks: TaskType[] = toParentElement
      updateTasks.forEach((tasks, index) => {
        Object.assign(tasks, response.data[index])
      })
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
