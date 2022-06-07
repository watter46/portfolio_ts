import type { CommentType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'

type editCommentType = (
  comment: string,
  props: {
    titleIndex: number,
    taskIndex: number,
    commentIndex: number,
    id: number,
    task_id: number,
    comment: string,
    comment_position: number,
  }
) => void


export const editCommentToApi: editCommentType = (comment, props) => {

  const editCommentData = {
    id: props.id,
    task_id: props.task_id,
    comment: comment,
    comment_position: props.comment_position
  }

  /* APIと通信 */
  axios.patch('/api/todo/comment/' + props.id + '/patch', editCommentData)
  .then((response: AxiosResponse<CommentType>) => {
    Object.assign(state.allData[props.titleIndex].tasks?.[props.taskIndex].comments?.[props.commentIndex], response.data)
  })
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
