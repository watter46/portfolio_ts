<script setup lang="ts">
import type { TaskType } from 'resources/ts/Store/type';
import { defineProps } from 'vue';
import { pushDeleteTaskList } from './Functions/pushDeleteTask'

type TaskProps = {
  tasks: TaskType;
  deleteState: {
    deleteTaskList: number[];
  };
}

defineProps<TaskProps>();
</script>

<template>
<div class="card-flex__show__checkbox">
  <input type="checkbox"
         v-model="tasks.done"
         @change="pushDeleteTaskList(tasks, deleteState)">
</div>
</template>
