import type { StateType, TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'
import  { calculatePosition } from '../../calculate-position'
import { getTitlePosition } from '../../getPosition/getTitlePosition'


export const updateTitlePositionToApi = (event: any) => {  
  const index = event.item.__draggable_context.index
  const id = event.item.__draggable_context.element.id
  const [ previousPosition, nextPosition, newPosition ] = calculatePosition(event)

  state.allData.map((titles, index) => ({ 'id': titles.id, 'title_position': (index + 1) * 1024 }))


  if (newPosition !== previousPosition &&
      newPosition !== nextPosition &&
      newPosition > 0 &&
      previousPosition > 0 &&
      nextPosition > 0)
  {
  /* positionが重なっていないときの処理 */
    const updateTitleData = {
      id: id,
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
  const updatePositionList = state.allData.map((titles, index) => ({ 'id': titles.id, 'title_position': (index + 1) * 1024 }))

  axios.patch('/api/todo/title/' + ids + '/patch',{
    newList: updatePositionList
  })
  .then((response: AxiosResponse<TitleType>) => console.log(response.data))
  // .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[index], response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  
  /* API通信 */
  // axios.patch('/api/todo/title/' + id + '/patch', updateTitleData)
  // .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[index], response.data))
  // .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
  }
}
