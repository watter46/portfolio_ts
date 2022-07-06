import type { TitleProps } from '../Functions/type'

import axios,{ AxiosError } from 'axios'
import { state } from '../../../../Store/state'


export const deleteTitleToApi = (props: TitleProps) => {
  const titles = props.titles

  /* API通信 */
  axios.delete('/api/todo/title/' + titles.id + '/delete', {
    data: { id: titles.id }
  })
  .then(() => console.log("delete 成功"))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  const deleteIndex = props.titleIndex
  state.allData.splice(deleteIndex, 1)
}
