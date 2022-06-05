import type { ResponseTaskArrayType, TaskType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'
import { calculatePosition } from '../../calculate-position'


export const updateTaskPositionToApi = (event: any) => {
  const index = event.item.__draggable_context.index
  const id = event.item.__draggable_context.element.id
  const task = event.item.__draggable_context.element.task
  const [ previousPosition, nextPosition, newPosition ] = calculatePosition('task', event)

  if (newPosition !== previousPosition &&
      newPosition !== nextPosition &&
      newPosition > 0 &&
      previousPosition > 0 &&
      nextPosition > 0)
  {
    /* positionが重なっていないときの処理 */
    const updateTaskData = {
      id: id,
      task: task,
      task_position: newPosition
    }


    /* API通信 */
    axios.patch('/api/todo/task/' + id + '/patch', updateTaskData)
    // .then((response: AxiosResponse<TaskType>) => Object.assign(state.allData[index], response.data))
    .then((response: AxiosResponse<TaskType>) => console.log(response.data))
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  } else {
    // /* positionが重なっているときの処理 */

    // /* positionをふり直す */
    // const ids = (state.allData.map(tasks => tasks.id)).join('-')

    // const updatePositionList = state.allData.map((tasks, index) => {
    //   return ({ 'id': tasks.id, 'title': tasks.task, 'task_position': (index + 1) * 1024 })
    // })

    // /* API通信 */
    // axios.patch('/api/todo/title/' + ids + '/patch', {
    //   updatePositionList: updatePositionList
    // })
    // .then((response: AxiosResponse<ResponseTaskArrayType>) => {
    //   state.allData.forEach((tasks, index) => {
    //     Object.assign(tasks, response.data[index])
    //   })
    // })
    // .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
