<script setup lang="ts">
import CheckBox from './CheckBox.vue'
import { ref } from 'vue'
import { editTaskToApi } from './API/editTaskToApi'
import { TaskType } from '../../../Store/type';

type TaskProps = {
  titleIndex: number;
  taskIndex: number;
  tasks: TaskType;
  deleteState: {
    deleteTaskList: number[];
  }
}

const taskProps = defineProps<TaskProps>();

const is_edit = ref(false)
</script>

<template>
  <div class="card-flex__show">
    <!-- CheckBox Component: タスクの状態を表示 -->
    <CheckBox :tasks="tasks"
              :delete-state="deleteState" />

    <div class="card-flex__show__input"
         v-if="!is_edit"
         v-text="tasks.task"
         @click="is_edit = true">
    </div>
    <input class="card-flex__show__input"
           v-if="is_edit"
           type="text"
           v-model="tasks.task"
           @change="editTaskToApi(taskProps)"
           @blur="is_edit = false"
           v-focus>
  </div>
</template>
