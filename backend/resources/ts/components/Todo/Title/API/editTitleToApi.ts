import type { TitleType } from '../../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { state } from '../../../../Store/state'

// type editTitleType = (
//   title: string,
//   id: number,
//   titleIndex: number,
//   title_position: number
// ) => void

type Props = {
  titleIndex: number;
  titles: TitleType;
}


export const editTitleToApi = (props: Props) => {
  const titles = props.titles

  const editTitleData = {
    id: titles.id,
    title: titles.title
  }

  /* APIと通信 */
  axios.patch('/api/todo/title/' + titles.id + '/patch', editTitleData)
  .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[props.titleIndex], response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
// export const editTitleToApi: editTitleType = (title, id, titleIndex, title_position) => {

//   const editTitleData = {
//     id: id,
//     title: title,
//     title_position: title_position
//   }

//   /* APIと通信 */
//   axios.patch('/api/todo/title/' + id + '/patch', editTitleData)
//   .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[titleIndex], response.data))
//   .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
// }
