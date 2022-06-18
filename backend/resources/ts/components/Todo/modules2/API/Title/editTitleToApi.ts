import type { TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../Store/state'

type editTitleType = (
  title: string,
  id: number,
  titleIndex: number,
  title_position: number
) => void



export const editTitleToApi: editTitleType = (title, id, titleIndex, title_position) => {

  const editTitleData = {
    id: id,
    title: title,
    title_position: title_position
  }

  /* APIと通信 */
  axios.patch('/api/todo/title/' + id + '/patch', editTitleData)
  .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[titleIndex], response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
