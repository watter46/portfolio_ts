import type { TaskProps } from '../Functions/type'
import type { TaskType } from 'resources/ts/Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const editTaskToApi = (taskProps: TaskProps) => {
  const tasks = taskProps.tasks

  /* APIと通信 */
  axios.patch('/api/todo/task/' + tasks.id + '/patch', tasks)
  .then((response: AxiosResponse<TaskType>) => {
    const editTask = state.allData[taskProps.titleIndex].tasks?.[taskProps.taskIndex] as TaskType
    Object.assign(editTask, response.data)
  })
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
