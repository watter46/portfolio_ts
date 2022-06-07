import type { ResponseCommentArrayType, CommentType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'
import { calculatePosition } from '../../calculate-position'
import { cloneDeep as _cloneDeep } from 'lodash'


export const updateCommentPositionToApi = (event: any, titleIndex: number, taskIndex: number) => {
  const commentIndex = event.item.__draggable_context.index

  const updateCommentData: CommentType = event.item.__draggable_context.element
  const id = updateCommentData.id

  const [ previousPosition, nextPosition, newPosition ] = calculatePosition('comment', event)

  if (newPosition !== previousPosition &&
      newPosition !== nextPosition &&
      newPosition > 0 &&
      previousPosition > 0 &&
      nextPosition > 0)
  {
    /* positionが重なっていないときの処理 */

    updateCommentData.comment_position = newPosition

    /* API通信 */
    axios.patch('/api/todo/comment/' + id + '/patch', updateCommentData)
    .then((response: AxiosResponse<CommentType>) => {
      Object.assign(state.allData[titleIndex].tasks?.[taskIndex].comments?.[commentIndex], response.data)
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  } else {
    /* positionが重なっているときの処理 */

    /* positionをふり直す */
    const ids = (state.allData.map(titles => titles.tasks?.map(tasks => tasks.comments?.map(comments => comments.id)))).join('-')
    const allData = _cloneDeep(state.allData)

    const updatePositionList = allData[titleIndex].tasks?.[taskIndex].comments?.map((comments, index) =>  {
      comments.comment_position = (index + 1) * 1024
      return comments
    })

    /* API通信 */
    axios.patch('/api/todo/comment/' + ids + '/patch', {
      updatePositionList: updatePositionList
    })
    .then((response: AxiosResponse<ResponseCommentArrayType>) => {
      state.allData[titleIndex].tasks?.[taskIndex].comments?.forEach((comments, index) => {
        Object.assign(comments, response.data[index])
      })
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
