import axios,{ AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const deleteTaskToApi = (titleIndex:number, taskIndex: number, id: number) => {

  /* API通信 */
  axios.delete('/api/todo/task/' + id + '/delete', {
    data: { id: id }
  })
  .then(() => console.log("delete 成功"))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  state.allData[titleIndex].tasks?.splice(taskIndex, 1)
}
