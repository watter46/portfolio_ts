<script setup lang="ts">
import draggable from 'vuedraggable'
import DeleteTitle from './DeleteTitle.vue'
import TaskComponent from '../Task/TaskComponent.vue'
import AddTask from '../Task/AddTask.vue'
import ShowTitle from './ShowTitle.vue'

import { TaskType } from '../../Store/type'
import { updateTaskPositionToApi } from '../../modules/API/Task/updateTaskPositionToApi'

type Props = {
  titleIndex: number;
  id: number;
  title: string;
  title_position: number;
  taskList: TaskType[];
}

defineProps<Props>();
</script>

<template>
  <div class="card card-border" style="background-color: grey;">
      <div class="card-flex">
        <ShowTitle :title-index="titleIndex"
                   :id="id"
                   :title="title"
                   :title_position="title_position"/>

        <DeleteTitle :title-index="titleIndex"
                     :id="id"
                     :title="title" />
      </div>
      
      <AddTask class="my-3"
               :title-index="titleIndex"
               :title_id="id"
               :task-list="taskList" />

      <draggable :list="taskList"
                 :group="{name: 'task'}"
                 animation="600"
                 item-key="id"
                 @end="updateTaskPositionToApi($event, titleIndex)">
        <template #item="{ element, index }">
          <TaskComponent :title-index="titleIndex"
                         :task-index="index"
                         :id="element.id"
                         :title_id="element.title_id"
                         :task="element.task"
                         :task_position="element.task_position"
                         :done="element.done"
                         :is_showing="element.is_showing"
                         :comment-list="element.comments" />
        </template>
      </draggable>
    </div>
</template>
