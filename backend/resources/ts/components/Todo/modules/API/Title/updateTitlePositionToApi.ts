import type { ResponseTitleArrayType, TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'
import { calculatePosition } from '../../calculate-position'


export const updateTitlePositionToApi = (event: any) => {
  const index = event.item.__draggable_context.index
  const id = event.item.__draggable_context.element.id
  const title = event.item.__draggable_context.element.title
  const [ previousPosition, nextPosition, newPosition ] = calculatePosition('title', event)


  if (newPosition !== previousPosition &&
      newPosition !== nextPosition &&
      newPosition > 0 &&
      previousPosition > 0 &&
      nextPosition > 0)
  {
    /* positionが重なっていないときの処理 */
    const updateTitleData = {
      id: id,
      title: title,
      title_position: newPosition
    }

    /* API通信 */
    axios.patch('/api/todo/title/' + id + '/patch', updateTitleData)
    .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[index], response.data))
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  } else {
    /* positionが重なっているときの処理 */

    /* positionをふり直す */
    const ids = (state.allData.map(titles => titles.id)).join('-')

    const updatePositionList = state.allData.map((titles, index) => {
      return ({ 'id': titles.id, 'title': titles.title, 'title_position': (index + 1) * 1024 })
    })

    /* API通信 */
    axios.patch('/api/todo/title/' + ids + '/patch', {
      updatePositionList: updatePositionList
    })
    .then((response: AxiosResponse<ResponseTitleArrayType>) => {
      state.allData.forEach((titles, index) => {
        Object.assign(titles, response.data[index])
      })
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
