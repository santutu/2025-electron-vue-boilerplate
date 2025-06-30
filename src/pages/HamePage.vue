<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProjectStore } from '../stores/useProjectStore'

const projectStore = useProjectStore()

const project = projectStore.project
const test2 = project.test2.test


const test = computed(() => {
    return project.test2.test
})


</script>

<template>
    <div>
        <h1>Home</h1>
        <p>{{ test2 }}</p>
        <p>{{ test }}</p>
        <p>{{ project.test2 }}</p>
        <p>{{ project.test2.test }}</p>
        <input type="text" v-model="project.test2.test" />
        <input type="text" v-model="test2" />
    </div>
</template>

<style scoped></style>