import { reactive } from "vue"
import { StateType } from '../Functions/type'

export const state = reactive<StateType>({
  allData: [],
})
