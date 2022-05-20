<script setup lang="ts">
import draggable from 'vuedraggable'
import DeleteTitle from './DeleteTitle.vue'
import TaskComponent from '../Task/TaskComponent.vue'
import AddTask from '../Task/AddTask.vue'
import ShowTitle from './ShowTitle.vue'

import { onMounted, ref, watchEffect, computed } from 'vue'
import { TaskType } from '../Functions/type'

interface Props {
  id: number,
  title: string,
  taskList: TaskType[],
  titleIndex: number
}

defineProps<Props>();

// const cardRef = ref<number>()
// const circle_width = ref<number>()

// onMounted(() => {
//   circle_width.value = cardRef.value.clientWidth / 12
// })
</script>

<template>
  <div class="card card-border" ref="cardRef" style="background-color: grey;">
      <div class="card-flex">
        <ShowTitle :id="id"
                   :title="title"
                   :title-index="titleIndex" />

        <DeleteTitle :id="id"
                     :title="title"
                     :title-index="titleIndex"
                      />
      </div>
      
      <AddTask class="my-3"
                :title-index="titleIndex" />
      <draggable :list="taskList"
                 :group="{name: 'task'}"
                 animation="600"
                 item-key="id">
        <template #item="{ element, index }">
          <TaskComponent :id="element.id"
                        :task="element.task"
                        :comment-list="element.comments"
                        :title-index="titleIndex"
                        :task-index="index" />
        </template>
      </draggable>
    </div>
</template>
