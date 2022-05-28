<script setup lang="ts">
import draggable from 'vuedraggable'
import DeleteTitle from './DeleteTitle.vue'
import TaskComponent from '../Task/TaskComponent.vue'
import AddTask from '../Task/AddTask.vue'
import ShowTitle from './ShowTitle.vue'

import { ref, onMounted } from 'vue'
import { TaskType } from '../Functions/type'

interface Props {
  id: number,
  title: string,
  taskList: TaskType[],
  titleIndex: number,
}

defineProps<Props>();
</script>

<template>
  <div class="card card-border" style="background-color: grey;">
      <div class="card-flex">
        <ShowTitle :id="id"
                   :title="title"
                   :title-index="titleIndex"
                   ref="root" />

        <DeleteTitle :id="id"
                     :title="title"
                     :title-index="titleIndex"
                      />
      </div>
      
      <AddTask class="my-3"
               :task-list="taskList"
               :title-id="id"
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
