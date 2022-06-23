<script setup lang="ts">
import draggable from 'vuedraggable'
import DeleteTitle from './DeleteTitle.vue'
import TaskComponent from '../Task/TaskComponent.vue'
import AddTitle from './AddTitle.vue'
import ShowTitle from './ShowTitle.vue'

import { TitleType } from '../../../Store/type'
import { updateTitlePositionToApi } from './API/updateTitlePositionToApi'

type Props = {
  allData: TitleType[]
}

defineProps<Props>();
</script>

<template>
  <AddTitle style="background-color: grey; height: 50px;" />
  <draggable  class="grid gap-3"
              :list="allData"
              :group="{name: 'title'}"
              animation="600"
              item-key="id"
              @end="updateTitlePositionToApi">
    <template #item="{ element, index }">
      <div class="card card-border" style="background-color: grey;">
        <div class="card-flex">
          <ShowTitle :title-index="index"
                     :titles="element" />

          <!-- <DeleteTitle :title-index="index"
                       :props="element" /> -->
        </div>

        <!-- <TaskComponent :title-index="index"
                       :props="element" /> -->
      </div>
    </template>
  </draggable>
</template>

<!-- <div class="card card-border" style="background-color: grey;">
        <div class="card-flex">
          <ShowTitle :title-index="index"
                     :id="element.id"
                     :title="element.title"
                     :title_position="element.title_position"/>

          <DeleteTitle :title-index="index"
                      :id="element.id"
                      :title="element.title" />
        </div>

        <TaskComponent :title-index="index"
                       :title_id="element.id"
                       :task-list="element.tasks" />
      </div> -->
