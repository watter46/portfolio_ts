import type { CommentType } from '../../../../Store/type'
import type { CommentProps } from '../Functions/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const editCommentToApi = (commentProps: CommentProps) => {
  const comments = commentProps.comments

  /* APIと通信 */
  axios.patch('/api/todo/comment/' + comments.id + '/patch', comments)
  .then((response: AxiosResponse<CommentType>) => {
    const editComment = state.allData[commentProps.titleIndex].tasks?.[commentProps.taskIndex].comments?.[commentProps.commentIndex] as CommentType
    Object.assign(editComment, response.data)
  })
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
