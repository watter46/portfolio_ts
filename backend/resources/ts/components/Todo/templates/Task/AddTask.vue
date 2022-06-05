<script setup lang="ts">
import type { TaskType } from '../../Store/type'

import { taskInput, addTaskToApi } from '../../modules/API/Task/addTaskToApi'


interface Props {
  titleIndex: number;
  title_id: number,
  taskList: TaskType[];
}

defineProps<Props>();
</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="taskInput" placeholder="taskを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTaskToApi(taskInput, titleIndex, title_id, taskList)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
