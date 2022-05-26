import axios from 'axios'
import { state } from '../Store/state'


export const getAllData = () => {
  axios.get('/api/')
  .then(response => {
    state.allData.push(...response.data)
  })
}
