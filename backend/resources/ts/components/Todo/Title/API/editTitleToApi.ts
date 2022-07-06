import type { TitleType } from 'resources/ts/Store/type'
import type { TitleProps } from '../Functions/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const editTitleToApi = (props: TitleProps) => {
  const titles = props.titles

  const editTitleData = {
    id: titles.id,
    title: titles.title,
    title_position: titles.title_position
  }
  
  /* APIと通信 */
  axios.patch('/api/todo/title/' + titles.id + '/patch', editTitleData)
  .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[props.titleIndex], response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
