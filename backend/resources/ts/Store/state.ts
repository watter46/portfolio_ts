import { reactive } from "vue"
import { StateType } from './type'

export const state = reactive<StateType>({
  allData: []
})

export const deleteState = reactive<{deleteTaskList: number[]}>({
  deleteTaskList: []
})
