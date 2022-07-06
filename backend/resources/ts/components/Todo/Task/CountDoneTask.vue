<script setup lang="ts">
import type { TaskType } from 'resources/ts/Store/type';
import { computed, defineProps } from 'vue'

type TaskProps = {
  tasks: TaskType[]
}

const tasksProps = defineProps<TaskProps>();

const doneCount = computed(() => tasksProps.tasks.filter(tasks => tasks.done === true).length)
</script>

<template>
  <p class="countDoneTask-count">selected: {{ doneCount }} / {{ tasks.length }}</p>
</template>
