<script setup lang="ts">
import { deleteTaskToApi } from './API/deleteTaskToApi';

type Props = {
  titleIndex: number;
  taskIndex: number;
  id: number;
  done: boolean;
  task: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTaskToApi(props)">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
