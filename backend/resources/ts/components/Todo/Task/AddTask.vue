<script setup lang="ts">
import type { TaskType } from 'resources/ts/Store/type';

import { ref } from 'vue'
import { addTaskToApi } from './API/addTaskToApi'

type TaskProps = {
  titleIndex: number;
  title_id: number;
  tasks: TaskType[];
}


const taskProps = defineProps<TaskProps>();

const taskInput = ref("")

const addTask = () => {
  addTaskToApi(taskInput.value, taskProps)

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
