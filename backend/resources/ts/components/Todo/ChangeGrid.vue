<script setup lang="ts">
import { reactive, onMounted } from 'vue'

interface Emits {
  (e: "gridChange", gridCols: string ): void
  (e: "divideChange", is_divide: boolean ): void
}

const emit = defineEmits<Emits>();

const comment_divide = reactive({
  is_divide: false
})


const changeGridColsTo1 = () => emitToTodo('grid-cols-1')
const changeGridColsTo2 = () => emitToTodo('grid-cols-2')
const changeGridColsTo3 = () => emitToTodo('grid-cols-3')
const changeGridColsTo4 = () => emitToTodo('grid-cols-4')

const divideComment = () => {
  comment_divide.is_divide ? comment_divide.is_divide = false : comment_divide.is_divide = true
  emitToTodo()
}

const emitToTodo = (emitGridCols = 'grid-cols-2') => {
  emit("gridChange", emitGridCols)
  emit("divideChange", comment_divide.is_divide)
}

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
