import type { TaskType } from 'resources/ts/Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getTaskPosition } from '../../../modules/Todo/getPosition/getTaskPosition'
import { state } from '../../../../Store/state'

type TaskProps = {
  titleIndex: number;
  title_id: number;
  tasks: TaskType[];
}

export const addTaskToApi = (input: string, taskProps: TaskProps) => {

  const task_position = getTaskPosition(taskProps.tasks)

  const addTaskData = {
    title_id: taskProps.title_id,
    task: input,
    task_position: task_position,
  }

  /* APIと通信 */
  axios.post('/api/todo/task/post', addTaskData)
  .then((response: AxiosResponse<TaskType>) => state.allData[taskProps.titleIndex].tasks?.push(response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
