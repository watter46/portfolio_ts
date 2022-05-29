<script setup lang="ts">
import type { StateType } from '../../Store/type'

import { deleteTitleToApi } from '../../modules/API/Title/deleteTitleToApi'
import { key as StateKey } from '../../Store/InjectionKey/StateKey'

import { inject } from 'vue'


interface Props {
  id: number,
  title: string,
  titleIndex: number
}
const props = defineProps<Props>();

const state = inject(StateKey) as StateType

const deleteTitle = () => deleteTitleToApi(state, props.id)
</script>


<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTitle()">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
