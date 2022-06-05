<script setup lang="ts">
import type { StateType, TaskType } from '../../Store/type'

import { deleteTaskToApi } from '../../modules/API/Task/deleteTaskToApi';

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
