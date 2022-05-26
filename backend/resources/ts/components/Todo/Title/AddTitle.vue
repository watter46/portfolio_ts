<script setup lang="ts">
import type { StateType } from '../Functions/type'

import { addTitleLogic } from './addTitleLogic'
import { key as StateKey } from '../Store/InjectionKey/StateKey'

import { inject, ref } from 'vue'

const state = inject(StateKey) as StateType

const titleInput = ref("")

const addTitle = (input: string) => {
  addTitleLogic(input, state)
  titleInput.value = ""
}
</script>

<template>
  <div class="addInput-flex">
    <input type="text" class="addInput-flex__input" v-model="titleInput" placeholder="Titleを入力してください">
    <div class="addInput-flex__add">
      <span type="button" class="buttonCircle" @click="addTitle(titleInput)">
        <span class="buttonCircle-plus"></span>
      </span>
    </div>
  </div>
</template>
