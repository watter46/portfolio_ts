<script setup lang="ts">
import type { StateType, TitleType, TaskType } from '../Functions/type'
import { inject, ref } from 'vue'
import { key as StateKey } from '../Store/InjectionKey/StateKey'
import { getTaskPosition } from '../Functions/Task/getTaskPosition'


interface Props {
  taskList: TaskType[];
  titleId: number;
  titleIndex: number;
}

const props = defineProps<Props>();

const taskInput = ref("")

const state = inject(StateKey) as StateType


const addTask = (input: string) => {
  const task_position = getTaskPosition(props.taskList)

  const addListObject: TaskType = {
    id: state.maxTaskId + 1,
    title_id: props.titleId,
    task_position: task_position,
    done: false,
    is_showing: false,
    task: input,
    comments: []
  }

  state.testList[props.titleIndex].tasks?.push(addListObject)

  taskInput.value = ""
}
</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="taskInput" placeholder="taskを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTask(taskInput)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
