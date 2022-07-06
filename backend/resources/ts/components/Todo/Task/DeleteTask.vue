<script setup lang="ts">
import { TaskType } from 'resources/ts/Store/type';
import { deleteTaskToApi } from './API/deleteTaskToApi';

type TaskProps = {
  titleIndex: number;
  taskIndex: number;
  tasks: TaskType;
  deleteState: {
    deleteTaskList: number[];
  }
}

const taskProps = defineProps<TaskProps>();
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTaskToApi(taskProps, deleteState.deleteTaskList)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
