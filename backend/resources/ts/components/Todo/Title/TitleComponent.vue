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
  <!-- AddTitle Component: タイトルを追加 -->
  <AddTitle style="background-color: grey; height: 50px;" />

  <!-- draggableライブラリ: タイトルの入れ替え -->
  <draggable class="grid gap-3"
             :list="allData"
             :group="{name: 'title'}"
             animation="600"
             item-key="id"
             @end="updateTitlePositionToApi">
    <template #item="{ element, index }">
      <div class="card card-border" style="background-color: grey;">
        <div class="card-flex">

          <!-- ShowTitle Component: タイトルの表示、編集 -->
          <ShowTitle :title-index="index"
                     :titles="element" />

          <!-- DeleteTitle Component: タイトルの削除 -->
          <DeleteTitle :title-index="index"
                       :titles="element" />
        </div>


        <!-- TaskComponent: Task一覧 -->
        <TaskComponent :title-index="index"
                       :title_id="element.id"
                       :tasks="element.tasks" />
      </div>
    </template>
  </draggable>
</template>
