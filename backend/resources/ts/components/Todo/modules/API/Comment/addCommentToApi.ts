import type { CommentType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getCommentPosition } from '../../getPosition/getCommentPosition'
import { state } from '../../../Store/state'
import { ref } from 'vue'


type AddCommentType = (
  input: string,
  titleIndex: number,
  taskIndex: number,
  task_id: number,
  commentList: CommentType[]
) => void

export let commentInput = ""

export const addCommentToApi: AddCommentType = (input, titleIndex, taskIndex, task_id, commentList) => {

  const comment_position = getCommentPosition(commentList)

  const addCommentData = {
    task_id: task_id,
    comment: input,
    comment_position: comment_position,
  }

  /* APIと通信 */
  axios.post('/api/todo/comment/post', addCommentData)
  .then((response: AxiosResponse<CommentType>) => state.allData[titleIndex].tasks?.[taskIndex].comments?.push(response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  commentInput = ""
}
