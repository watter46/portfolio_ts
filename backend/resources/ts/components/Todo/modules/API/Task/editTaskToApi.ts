import type { TaskType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'

type editTaskType = (
  task: string,
  props: {
    titleIndex: number,
    taskIndex: number,
    id: number,
    title_id: number,
    task: string,
    task_position: number,
    done: boolean,
    is_showing: boolean
  }
) => void


export const editTaskToApi: editTaskType = (task, props) => {

  const editTaskData = {
    id: props.id,
    title_id: props.title_id,
    task: task,
    done: props.done,
    is_showing: props.is_showing,
    task_position: props.task_position
  }

  /* APIと通信 */
  axios.patch('/api/todo/task/' + props.id + '/patch', editTaskData)
  .then((response: AxiosResponse<TaskType>) => {
    Object.assign(state.allData[props.titleIndex].tasks?.[props.taskIndex], response.data)
  })
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
