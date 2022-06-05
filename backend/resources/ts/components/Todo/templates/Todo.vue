<script setup lang="ts">
import draggable from 'vuedraggable'
import AddTitle from './Title/AddTitle.vue'
import TitleComponent from './Title/TitleComponent.vue'
import ChangeGrid from './ChangeGrid.vue'

import { provide, watchEffect } from 'vue'
import { state } from '../Store/state'
import { gridState } from '../Store/gridState'
import { key as StateKey } from '../Store/InjectionKey/StateKey'
import { key as GridStateKey } from '../Store/InjectionKey/GridStateKey'
import { gridChange, divideChange } from '../modules/gridChangeLogic'
import { getAllDataToApi }  from '../modules/API/getAllDataToApi'
import { updateTitlePositionToApi } from '../modules/API/Title/updateTitlePositionToApi'


watchEffect(() => console.log(JSON.stringify(state.allData, null, 2)))

/* API 全てのデータ取得 */
getAllDataToApi()

provide(StateKey, state)

provide(GridStateKey, gridState)
</script>

<template>
  <!-- changeGridコンポーネント: Grid幅変更 -->
  <ChangeGrid @gridChange="gridChange"
              @divideChange="divideChange" />

  <!-- AddTitleコンポーネント: タイトル追加 -->
  <AddTitle style="background-color: grey; height: 50px;" />

  <draggable  class="grid gap-3"
              :class="gridState.gridCols"
              :list="state.allData"
              :group="{name: 'title'}"
              animation="600"
              item-key="id"
              @end="updateTitlePositionToApi">
    <template #item="{ element, index }">
      <TitleComponent :title-index="index"
                      :id="element.id"
                      :title="element.title"
                      :title_position="element.title_position"
                      :task-list="element.tasks" />
    </template>
  </draggable>
</template>
