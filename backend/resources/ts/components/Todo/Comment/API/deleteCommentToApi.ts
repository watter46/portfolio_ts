import type { CommentProps } from '../Functions/type'


import axios,{ AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const deleteCommentToApi = (commentProps: CommentProps) => {
  const comments = commentProps.comments

  /* API通信 */
  axios.delete('/api/todo/comment/' + comments.id + '/delete', {
    data: { id: comments.id }
  })
  .then(() => console.log("delete 成功"))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  state.allData[commentProps.titleIndex].tasks?.[commentProps.taskIndex].comments?.splice(commentProps.commentIndex, 1)
}
