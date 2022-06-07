import type { ResponseTaskArrayType, TaskType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'
import { calculatePosition } from '../../calculate-position'
import { cloneDeep as _cloneDeep } from 'lodash'


export const updateTaskPositionToApi = (event: any, titleIndex: number) => {
  const taskIndex = event.item.__draggable_context.index

  const updateTaskData: TaskType = event.item.__draggable_context.element
  const id = updateTaskData.id

  const [ previousPosition, nextPosition, newPosition ] = calculatePosition('task', event)

  if (newPosition !== previousPosition &&
      newPosition !== nextPosition &&
      newPosition > 0 &&
      previousPosition > 0 &&
      nextPosition > 0)
  {
    /* positionが重なっていないときの処理 */

    updateTaskData.task_position = newPosition

    /* API通信 */
    axios.patch('/api/todo/task/' + id + '/patch', updateTaskData)
    .then((response: AxiosResponse<TaskType>) => Object.assign(state.allData[titleIndex].tasks?.[taskIndex], response.data))
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  } else {
    /* positionが重なっているときの処理 */

    /* positionをふり直す */
    const ids = (state.allData.map(titles => titles.tasks?.map(tasks => tasks.id))).join('-')
    
    const allData = _cloneDeep(state.allData)

    const updatePositionList = allData[titleIndex].tasks?.map((tasks, index) => {
      tasks.task_position = (index + 1) * 1024
      return tasks
    })

    /* API通信 */
    axios.patch('/api/todo/task/' + ids + '/patch', {
      updatePositionList: updatePositionList
    })
    .then((response: AxiosResponse<ResponseTaskArrayType>) => {
      state.allData[titleIndex].tasks?.forEach((tasks, index) => {
        Object.assign(tasks, response.data[index])
      })
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
