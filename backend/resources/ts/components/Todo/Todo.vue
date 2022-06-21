<script setup lang="ts">
import TitleComponent from './Title/TitleComponent.vue'
import ChangeGrid from './ChangeGrid/ChangeGrid.vue'

import { state } from '../../Store/state'
import { gridChange, divideChange } from './ChangeGrid/gridChangeLogic'
import { getAllDataToApi }  from './getAllDataToApi'
import { watchEffect } from 'vue'


// watchEffect(() => console.log(JSON.stringify(state.allData, null, 2)))

/* API 全てのデータ取得 */
getAllDataToApi()
</script>

<template>
  <!-- changeGridコンポーネント: Grid幅変更 -->
  <ChangeGrid @gridChange="gridChange"
              @divideChange="divideChange" />

  <TitleComponent :allData="state.allData" />
</template>
