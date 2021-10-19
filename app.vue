<script setup lang="ts">
interface ResData {
  id: number;
  title: string;
}
const { data } = await useAsyncData("hello", () => $fetch("/api/hello"));
const { data: todo } = await useFetch<string, ResData>("/todos/1", {
  pick: ["id", "title"],
  baseURL: "https://jsonplaceholder.typicode.com",
});
</script>

<template>
  {{ data.counter }}
  <p>{{ data.hello }}</p>
  <p>{{ todo.id }} {{ todo.title }}</p>
</template>
