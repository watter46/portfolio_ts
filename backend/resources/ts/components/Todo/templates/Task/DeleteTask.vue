<script setup lang="ts">
import type { StateType, TaskType } from '../../Store/type'

import { inject } from 'vue'
import { key as StateKey } from '../../Store/InjectionKey/StateKey'


interface Props {
  id: number,
  task: string,
  taskIndex: number,
  titleIndex: number
}

const props = defineProps<Props>();

const state = inject(StateKey) as StateType

const deleteTask = () => {
  const deleteTaskList = state.allData[props.titleIndex].tasks as TaskType[]

  const deleteIndex = deleteTaskList.findIndex(tasks => tasks.id === props.id)

  deleteTaskList.splice(deleteIndex, 1)
}
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTask()">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
