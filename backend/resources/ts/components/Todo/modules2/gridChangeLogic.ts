import { gridState } from '../Store/gridState'


export const gridChange = (emitGridCols: string) => gridState.gridCols = emitGridCols

export const divideChange = (emit_is_divide: boolean) => gridState.is_divide = emit_is_divide
