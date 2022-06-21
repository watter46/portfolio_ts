import type { TaskType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getTaskPosition } from '../getPosition/getTaskPosition'
import { state } from '../../../Store/state'
import { ref } from 'vue'

type AddTaskType = {
  title_id: number;
  task: string;
  task_position: number;
}

export const addTaskToApi = (input: string, titleIndex: number, title_id: number, taskList: TaskType[]) => {

  const task_position = getTaskPosition(taskList)

  const addTaskData: AddTaskType = {
    title_id: title_id,
    task: input,
    task_position: task_position,
  }

  /* APIと通信 */
  axios.post('/api/todo/task/post', addTaskData)
  .then((response: AxiosResponse<TaskType>) => state.allData[titleIndex].tasks?.push(response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
