import type { StateType, TitleType } from '../Functions/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getTitlePosition } from '../Functions/Title/getTitlePosition'

type AddTitleType = {
  title_position: number;
  title: string;
}

export const addTitleLogic = (input: string, state: StateType) => {

  const title_position = getTitlePosition(state.allData)

  const addTitleData: AddTitleType = {
    title_position: title_position,
    title: input,
  }

  /* APIと通信 */
  axios.post('/api/todo/title/post', addTitleData)
  .then((response: AxiosResponse<TitleType>) => state.allData.push(response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))
}
