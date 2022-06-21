import type { GridStateType } from './type'

import { reactive } from 'vue'

export const gridState = reactive<GridStateType>({
  gridCols: "",
  is_divide: false
})
