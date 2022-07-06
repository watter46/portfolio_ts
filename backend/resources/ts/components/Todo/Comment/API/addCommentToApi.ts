import type { CommentType } from '../../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getCommentPosition } from '../../../modules/Todo/getPosition/getCommentPosition'
import { state } from '../../../../Store/state'

type CommentProps = {
  titleIndex: number;
  taskIndex: number;
  task_id: number;
  comments: CommentType[];
}

export const addCommentToApi = (input: string, commentProps: CommentProps) => {
  const comments = commentProps.comments

  const comment_position = getCommentPosition(comments)

  const addCommentData = {
    task_id: commentProps.task_id,
    comment: input,
    comment_position: comment_position,
  }

  /* APIと通信 */
  axios.post('/api/todo/comment/post', addCommentData)
  .then((response: AxiosResponse<CommentType>) => state.allData[commentProps.titleIndex].tasks?.[commentProps.taskIndex].comments?.push(response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
