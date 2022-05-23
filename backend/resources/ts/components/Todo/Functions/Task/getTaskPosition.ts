import type { TaskType } from '../type'

export const getTaskPosition = (taskList: TaskType[]) => {

  const new_task_position = taskList.length ? taskList.slice(-1)[0].task_position + 1024 : 1024

  return new_task_position
}
