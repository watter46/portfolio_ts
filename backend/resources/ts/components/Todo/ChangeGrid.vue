<script setup lang="ts">
import { reactive, onMounted} from 'vue'

/*
  type
*/
interface Emits {
  (e: "gridChange", gridCols: string ): void
  (e: "divideChange", is_divide: boolean ): void
}

/*
  emit
*/
const emit = defineEmits<Emits>();

/*
  data
*/
const grids = reactive({
  gridCols1: false,
  gridCols2: false,
  gridCols3: false,
  gridCols4: false,
})

const comment_divide = reactive({
  is_divide: false
})

/*
  methods
*/
const changeGridColsTo1 = () => {
  grids.gridCols1 = true
  grids.gridCols2 = false
  grids.gridCols3 = false
  grids.gridCols4 = false
  emitToTodo('grid-cols-1')
}
const changeGridColsTo2 = () => {
  grids.gridCols1 = false
  grids.gridCols2 = true
  grids.gridCols3 = false
  grids.gridCols4 = false
  emitToTodo('grid-cols-2')
}
const changeGridColsTo3 = () => {
  grids.gridCols1 = false
  grids.gridCols2 = false
  grids.gridCols3 = true
  grids.gridCols4 = false
  emitToTodo('grid-cols-3')
}
const changeGridColsTo4 = () => {
  grids.gridCols1 = false
  grids.gridCols2 = false
  grids.gridCols3 = false
  grids.gridCols4 = true
  emitToTodo('grid-cols-4')
}

const divideComment = () => {
  comment_divide.is_divide ? comment_divide.is_divide = false : comment_divide.is_divide = true
  emitToTodo()
}

const emitToTodo = (emitGridCols = 'grid-cols-2') => {
  emit("gridChange", emitGridCols)
  emit("divideChange", comment_divide.is_divide)
}

/*
  mounted
*/
onMounted(emitToTodo)
</script>

<template>
  <div class="gridButton-flex">
    <label class="switch">
      <input type="checkbox" @change="divideComment">
      <span class="slider round"></span>
    </label>
    <div class="gridButton-flex-frame me-2" @click="changeGridColsTo1">
      <span type="button" class="gridButton-flex-frame__changeTo1"></span>
    </div>
    <div class="gridButton-flex-frame me-2" @click="changeGridColsTo2">
      <span type="button" class="gridButton-flex-frame__changeTo2"></span>
    </div>
    <div class="gridButton-flex-frame me-2" @click="changeGridColsTo3">
      <span type="button" class="gridButton-flex-frame__changeTo3"></span>
    </div>
    <div class="gridButton-flex-frame" @click="changeGridColsTo4">
      <span type="button" class="gridButton-flex-frame__changeTo4"></span>
    </div>
  </div>
</template>
