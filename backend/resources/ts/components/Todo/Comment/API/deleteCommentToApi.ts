import axios,{ AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const deleteCommentToApi = (titleIndex:number, taskIndex: number, commentIndex: number, id: number) => {

  /* API通信 */
  axios.delete('/api/todo/comment/' + id + '/delete', {
    data: { id: id }
  })
  .then(() => console.log("delete 成功"))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  state.allData[titleIndex].tasks?.[taskIndex].comments?.splice(commentIndex, 1)
}
