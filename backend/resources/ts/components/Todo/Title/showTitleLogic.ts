import type { StateType, TitleType } from '../Functions/type'

import axios, { AxiosResponse, AxiosError } from 'axios'

type showTitleLogicType = (
  id: number,
  title: string,
  titleIndex: number,
  state: StateType,
) => void



export const showTitleLogic: showTitleLogicType = (id, title, titleIndex, state) => {

  const editInputTitle = {
    id: id,
    title: title,
  }

  /* APIと通信 */
  axios.patch('/api/todo/title/' + id + '/patch', editInputTitle)
  .then((response: AxiosResponse<TitleType>) => Object.assign(state.allData[titleIndex], response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
