import type { StateType, TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'

type editTitleType = (
  id: number,
  title: string,
  titleIndex: number,
) => void



export const editTitleToApi: editTitleType = (id, title, titleIndex) => {

  const editTitleData = {
    id: id,
    title: title,
  }

  /* APIと通信 */
  axios.patch('/api/todo/title/' + id + '/patch', editTitleData)
  .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[titleIndex], response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
