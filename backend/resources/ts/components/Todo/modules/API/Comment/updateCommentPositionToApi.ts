import type { ResponseCommentArrayType, CommentType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getDraggedPosition } from '../Positions/getDraggedPosition'
import { cloneDeep as _cloneDeep } from 'lodash'


export const updateCommentPositionToApi = (event: any) => {
  const draggableElement = event.item.__draggable_context.element
  const toParentElement = event.to.parentElement.__draggable_context.element.comments
  const getParentId: number =  event.to.parentElement.__draggable_context.element.id

  const { newPosition, is_samePosition } = getDraggedPosition('comment', event)


  if (is_samePosition === false)
  {
    console.log("position重なってない")
    /* positionが重なっていないときの処理 */
    const updateCommentData: CommentType = _cloneDeep(draggableElement)

    updateCommentData.comment_position = newPosition
    updateCommentData.task_id = getParentId


    /* API通信 */
    axios.patch('/api/todo/comment/' + updateCommentData.id + '/patch', updateCommentData)
    .then((response: AxiosResponse<CommentType>) => {
      const updateComment = draggableElement
      Object.assign(updateComment, response.data)
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
  else
  {
    console.log("position重なってる")
    /* positionが重なっているときの処理 */

    /* positionをふり直す */
    const updateCommentsList: CommentType[] = _cloneDeep(toParentElement)

    const ids = (updateCommentsList.map(comments => comments.id)).join('-')
    
    const updatePositionList = updateCommentsList.map((comments, index) => {
      comments.comment_position = (index + 1) * 1024
      return comments
    })


    /* API通信 */
    axios.patch('/api/todo/comment/' + ids + '/patch', {
      updatePositionList: updatePositionList
    })
    .then((response: AxiosResponse<ResponseCommentArrayType>) => {
      const updateComments: CommentType[] = toParentElement
      updateComments.forEach((comments, index) => {
        Object.assign(comments, response.data[index])
      })
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
// export const updateCommentPositionToApi = (event: any, titleIndex: number, taskIndex: number) => {
//   const commentIndex = event.item.__draggable_context.index

//   const updateCommentData: CommentType = event.item.__draggable_context.element
//   const id = updateCommentData.id

//   const [ previousPosition, nextPosition, newPosition ] = calculatePosition('comment', event)

//   if (newPosition !== previousPosition &&
//       newPosition !== nextPosition &&
//       newPosition > 0 &&
//       previousPosition > 0 &&
//       nextPosition > 0)
//   {
//     /* positionが重なっていないときの処理 */

//     updateCommentData.comment_position = newPosition

//     /* API通信 */
//     axios.patch('/api/todo/comment/' + id + '/patch', updateCommentData)
//     .then((response: AxiosResponse<CommentType>) => {
//       Object.assign(state.allData[titleIndex].tasks?.[taskIndex].comments?.[commentIndex], response.data)
//     })
//     .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

//   } else {
//     /* positionが重なっているときの処理 */

//     /* positionをふり直す */
//     const ids = (state.allData.map(titles => titles.tasks?.map(tasks => tasks.comments?.map(comments => comments.id)))).join('-')
//     const allData = _cloneDeep(state.allData)

//     const updatePositionList = allData[titleIndex].tasks?.[taskIndex].comments?.map((comments, index) =>  {
//       comments.comment_position = (index + 1) * 1024
//       return comments
//     })

//     /* API通信 */
//     axios.patch('/api/todo/comment/' + ids + '/patch', {
//       updatePositionList: updatePositionList
//     })
//     .then((response: AxiosResponse<ResponseCommentArrayType>) => {
//       state.allData[titleIndex].tasks?.[taskIndex].comments?.forEach((comments, index) => {
//         Object.assign(comments, response.data[index])
//       })
//     })
//     .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
//   }
// }
