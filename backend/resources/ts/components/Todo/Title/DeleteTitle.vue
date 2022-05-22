<script setup lang="ts">
import { inject, onUpdated } from 'vue'
import { StateType, TaskType } from '../Functions/type'
import { key as StateKey } from '../Store/InjectionKey/StateKey'


interface Props {
  id: number,
  title: string,
  titleIndex: number
}

const props = defineProps<Props>();

const state = inject(StateKey) as StateType

const deleteTitle = () => {
  const deleteIndex = state.testList.findIndex(list => list.id === props.id)
  state.testList.splice(deleteIndex, 1)
}

// onUpdated(() => console.log(props.circleWidth))
</script>

<template>
  <div class="card-flex__delete">
    <span type="button" class="buttonCircle" @click="deleteTitle()">
      <span class="buttonCircle-cross"></span>
    </span>
  </div>
</template>
