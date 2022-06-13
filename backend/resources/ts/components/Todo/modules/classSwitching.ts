import { computed } from 'vue'
import { gridState } from '../Store/gridState'
 
export const classSwitching__gridCols11 = computed(() => gridState.is_divide ? 'grid grid-cols-11' : '')

export const classSwitching__colSpan5 = computed(() => gridState.is_divide ? 'col-span-5' : '')

export const classSwitching__colSpan1 = computed(() => gridState.is_divide ? 'col-span-1' : '')

export const classSwitching__arrow = computed(() => gridState.is_divide ? 'arrow' : '')
