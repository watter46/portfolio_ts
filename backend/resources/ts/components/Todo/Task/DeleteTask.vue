<script setup lang="ts">
import { deleteTaskToApi } from './API/deleteTaskToApi';

interface Props {
  id: number,
  task: string,
  taskIndex: number,
  titleIndex: number
}

defineProps<Props>();
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTaskToApi(titleIndex, taskIndex, id)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
