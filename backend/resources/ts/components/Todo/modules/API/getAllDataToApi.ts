import axios from 'axios'
import { state } from '../../Store/state'


export const getAllDataToApi = () => {
  axios.get('/api/')
  .then(response => {
    state.allData.push(...response.data)
  })
}
