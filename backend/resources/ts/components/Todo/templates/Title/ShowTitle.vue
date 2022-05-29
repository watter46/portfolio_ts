<script setup lang="ts">
import type { StateType } from '../../Store/type'

import { reactive, inject } from 'vue'
import { editTitleToApi } from '../../modules/API/Title/editTitleToApi'
import { key as StateKey } from '../../Store/InjectionKey/StateKey'


interface Props {
  id: number,
  title: string,
  titleIndex: number
}

const props = defineProps<Props>();

const state = inject(StateKey) as StateType


const titleState = reactive<{value: string, edit: boolean}>({
  value: props.title,
  edit: false
})


const editTitle = () => {
  
  editTitleToApi(props.id, titleState.value, props.titleIndex)

  console.log("変更されました")
}
</script>

<template>
  <div class="card-flex__show">
    <div
      v-if="!titleState.edit"
      v-text="titleState.value"
      @click="titleState.edit = true">
    </div>
      <input
        v-if="titleState.edit"
        type="text"
        v-model="titleState.value"
        @change="editTitle"
        @blur="titleState.edit = false"
        v-focus
      >
  </div>
</template>
