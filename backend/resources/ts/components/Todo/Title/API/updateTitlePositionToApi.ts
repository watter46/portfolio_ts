import type { ResponseTitleArrayType, TitleType } from '../../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { cloneDeep as _cloneDeep } from 'lodash'
import { state } from '../../../../Store/state'
import { getDraggedPosition } from '../../../modules/Todo/Positions/getDraggedPosition'


export const updateTitlePositionToApi = (event: any) => {
  const newIndex = event.newIndex
  const draggableElement = event.item.__draggable_context.element
  const parentElement: TitleType[] = event.item.parentElement.__draggable_component__.list
  const { newPosition, is_samePosition } = getDraggedPosition('title', event)


  if (is_samePosition === false)
  {
    /* positionが重なっていないときの処理 */
    const updateTitleData: TitleType = _cloneDeep(draggableElement)

    updateTitleData.title_position = newPosition


    /* API通信 */
    axios.patch('/api/todo/title/' + updateTitleData.id + '/patch', updateTitleData)
    .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[newIndex], response.data))
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  } else {
    /* positionが重なっているときの処理 */

    /* positionをふり直す */
    const titles: TitleType[] = event.item.parentElement.__draggable_component__.list
    console.log(titles)

    const ids = (titles.map(titles => titles.id)).join('-')
    
    const updatePositionList = titles.map((titles, index) => {
      titles.title_position = (index + 1) * 1024
      return titles
    })


    /* API通信 */
    axios.patch('/api/todo/title/' + ids + '/patch', {
      updatePositionList: updatePositionList
    })
    .then((response: AxiosResponse<ResponseTitleArrayType>) => {
      const updateTitles: TitleType[] = parentElement
      updateTitles.forEach((titles, index) => {
        Object.assign(titles, response.data[index])
      })
    })
    .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
