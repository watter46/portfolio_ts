import type { TitleType } from '../../../Store/type'

import axios, { AxiosResponse, AxiosError } from 'axios'
import { getTitlePosition } from '../../getPosition/getTitlePosition'
import { state } from '../../../Store/state'
import { ref } from 'vue'

type AddTitleType = {
  title_position: number;
  title: string;
}

export const titleInput = ref("")

export const addTitleToApi = (input: string) => {

  const title_position = getTitlePosition(state.allData)

  const addTitleData: AddTitleType = {
    title_position: title_position,
    title: input,
  }

  /* APIと通信 */
  axios.post('/api/todo/title/post', addTitleData)
  .then((response: AxiosResponse<TitleType>) => state.allData.push(response.data))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  titleInput.value = ""
}
