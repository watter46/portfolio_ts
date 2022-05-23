<script setup lang="ts">
import { reactive } from 'vue'


interface Props {
  id: number,
  title: string,
  titleIndex: number
}

const props = defineProps<Props>();

const test = reactive<{value: string, edit: boolean}>({
    value: props.title,
    edit: false
  })

</script>

<template>
  <div class="card-flex__show">
    <div
      v-if="!test.edit"
      v-text="test.value"
      @click="test.edit = true">
    </div>
      <input
        v-if="test.edit"
        type="text"
        v-model="test.value"
        @blur="test.edit = false"
        v-focus
      >
  </div>
</template>
