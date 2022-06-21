<script setup lang="ts">
import { reactive } from 'vue'
import { editTaskToApi } from './API/editTaskToApi'
import { TaskType } from '../../../Store/type';

type Props = {
  titleIndex: number;
  taskIndex: number;
  taskList: TaskType;
}

type TaskStateType = {
  input: string;
  is_done: boolean;
  is_showing: boolean;
  is_edit: boolean;
}

const props = defineProps<Props>();

const taskState = reactive<TaskStateType>({
  input: props.taskList.task,
  is_done: props.taskList.done,
  is_showing: props.taskList.is_showing,
  is_edit: false
})
</script>

<template>
  <div class="card-flex__show">
    <div class="card-flex__show__checkbox">
      <input type="checkbox" v-model="taskState.is_done">
    </div>
    <div class="card-flex__show__input"
         v-if="!taskState.is_edit"
         v-text="taskState.input"
         @click="taskState.is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="taskState.is_edit"
           type="text"
           v-model="taskState.input"
           @change="editTaskToApi(taskState.input, props)"
           @blur="taskState.is_edit = false"
           v-focus>
  </div>
</template>
