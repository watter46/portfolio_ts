<script setup lang="ts">
import type { TaskType } from 'resources/ts/Store/type'
import { defineProps, ref, inject } from 'vue'
import { alertNotSelectedTask } from './Functions/Alert/confirmDeleteTask'
// import { pushDeleteTaskList } from './Functions/pushDeleteTask'

import './css/countDoneTask.css'

type TaskProps = {
  tasks: TaskType[];
}
// type TaskProps = {
//   tasks: TaskType[];
//   deleteState: {
//     deleteTaskList: number[]
//   };
// }

const taskProps = defineProps<TaskProps>();

type injectType = {
  deleteTaskList: number[]
}

const deleteState = inject<injectType>('delete')

const is_delete = ref(false)

const push = () => {
  taskProps.tasks.map(tasks => {
    if (tasks.done) {
      deleteState?.deleteTaskList.push(tasks.id)
    }
  })
}

const allSelect = () => {
  if (is_delete.value) {
    taskProps.tasks.map(tasks => {
      tasks.done = true
      return tasks
    })

    push()
  }
  else
  {
    taskProps.tasks.map(tasks => {
      tasks.done = false
      return tasks
    })
  }
}



const allDelete = () => {
  const is_deletable = taskProps.tasks.some(tasks => tasks.done === true)

  if (is_deletable) {
    console.log("deletable")
    // push()
    console.log(deleteState?.deleteTaskList)
    // console.log(taskProps.deleteState.deleteTaskList)
  }
  else
  {
    alertNotSelectedTask()
  }
}
</script>

<template>
  <div class="countDoneTask-flex">
    <div class="countDoneTask-checkbox">
      <input type="checkbox" v-model="is_delete" @change="allSelect()">
    </div>
    <button type="button" class="countDoneTask-btn" @click="allDelete()">Delete</button>
  </div>
</template>
