import type { TaskProps } from '../Functions/type'

import axios,{ AxiosError } from 'axios'
import { state } from '../../../../Store/state'
import { alertNotDoneTask } from '../Functions/Alert/confirmDeleteTask'


export const deleteTaskToApi = (taskProps: TaskProps, deleteTaskList: number[]) => {
  const tasks = taskProps.tasks

  if (!tasks.done) {
    alertNotDoneTask()
  } 
  else {
    console.log("削除できます")
    const id = tasks.id
    console.log(id)
    console.log(deleteTaskList)
  }

  // if (is_done) {
    
  //   // /* API通信 */
  //   axios.delete('/api/todo/task/' + tasks.id + '/delete', {
  //     data: { id: tasks.id }
  //   })
  //   .then(() => console.log("delete 成功"))
  //   .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  //   /* allDataから対象のタスクを削除 */
  //   state.allData[taskProps.titleIndex].tasks?.splice(taskProps.taskIndex, 1)
  // }
}
