import type { CommentType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'

// type editCommentType = (
//   comment: string,
//   props: {
//     titleIndex: number,
//     taskIndex: number,
//     commentIndex: number,
//     id: number,
//     task_id: number,
//     comment: string,
//     comment_position: number,
//   }
// ) => void

type editCommentType = (
  commentInput: string,
  props: {
    titleIndex: number,
    taskIndex: number,
    commentIndex: number,
    commentList: CommentType
  }
) => void


export const editCommentToApi: editCommentType = (commentInput, props) => {

  const editCommentData = {
    id: props.commentList.id,
    task_id: props.commentList.task_id,
    comment: commentInput,
    comment_position: props.commentList.comment_position
  }

  /* APIと通信 */
  axios.patch('/api/todo/comment/' + props.commentList.id + '/patch', editCommentData)
  .then((response: AxiosResponse<CommentType>) => {
    const editComment = state.allData[props.titleIndex].tasks?.[props.taskIndex].comments?.[props.commentIndex] as CommentType
    Object.assign(editComment, response.data)
  })
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
