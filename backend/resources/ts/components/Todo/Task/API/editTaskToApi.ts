import type { TaskType } from '../../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../../Store/state'

type editTaskType = (
  taskInput: string,
  props: {
    titleIndex: number,
    taskIndex: number,
    taskList: TaskType
  }
) => void


export const editTaskToApi: editTaskType = (taskInput, props) => {

  const editTaskData = props.taskList

  editTaskData.task = taskInput

  /* APIと通信 */
  axios.patch('/api/todo/task/' + props.taskList.id + '/patch', editTaskData)
  .then((response: AxiosResponse<TaskType>) => {
    const editTask = state.allData[props.titleIndex].tasks?.[props.taskIndex] as TaskType
    Object.assign(editTask, response.data)
  })
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
