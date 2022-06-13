<script setup lang="ts">
import type { TaskType } from '../../Store/type'

import { addTaskToApi } from '../../modules/API/Task/addTaskToApi'
import { ref } from 'vue'


interface Props {
  titleIndex: number;
  title_id: number,
  taskList: TaskType[];
}

const props = defineProps<Props>();

const taskInput = ref("")

const addTask = () => {
  addTaskToApi(taskInput.value, props.titleIndex, props.title_id, props.taskList)

  taskInput.value = ""
}
</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="taskInput" placeholder="taskを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTask">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
