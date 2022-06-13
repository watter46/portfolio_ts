import type { GridStateType } from '../Store/type'

import { reactive } from 'vue'

export const gridState = reactive<GridStateType>({
  gridCols: "",
  is_divide: false
})
