import type { StateType } from '../../../Store/type'

import axios,{ AxiosError } from 'axios'


export const deleteTitleToApi = (state: StateType, id: number) => {

  /* API通信 */
  axios.delete('/api/todo/title/' + id + '/delete', {
    data: { id: id }
  })
  .then(() => console.log("delete 成功"))
  .catch((e: AxiosError<{ error: string }>) => console.log(e.message))

  const deleteIndex = state.allData.findIndex(list => list.id === id)
  state.allData.splice(deleteIndex, 1)
}