<script setup lang="ts">
import { ref } from 'vue'
import { editTaskToApi } from './API/editTaskToApi'
import { TaskType } from '../../../Store/type';

type Props = {
  titleIndex: number;
  taskIndex: number;
  taskList: TaskType;
}

const props = defineProps<Props>();

const is_edit = ref(false)
</script>

<template>
  <div class="card-flex__show">
    <div class="card-flex__show__checkbox">
      <input type="checkbox" v-model="taskList.done">
    </div>
    <div class="card-flex__show__input"
         v-if="!is_edit"
         v-text="taskList.task"
         @click="is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="is_edit"
           type="text"
           v-model="taskList.task"
           @change="editTaskToApi(taskList.task, props)"
           @blur="is_edit = false"
           v-focus>
  </div>
</template>
