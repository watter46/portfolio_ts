<script setup lang="ts">
import type { StateType, TaskType } from '../Functions/type'

import { deleteTitleLogic } from './deleteTitleLogic'
import { key as StateKey } from '../Store/InjectionKey/StateKey'

import { inject, onUpdated } from 'vue'


interface Props {
  id: number,
  title: string,
  titleIndex: number
}
const props = defineProps<Props>();

const state = inject(StateKey) as StateType

const deleteTitle = () => deleteTitleLogic(state, props.id)
</script>


<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTitle()">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
