import type { StateType, TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'
import  { calculatePosition } from '../../calculate-position'

export const updateTitlePositionToApi = (event: any) => {
  const newPosition = calculatePosition(event)
  
  /* API通信 */
  // axios.patch('/api/todo/title/' + id + '/patch', addTitleData)
  // .then((response: AxiosResponse<TitleType>) => state.allData.push(response.data))
  // .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
