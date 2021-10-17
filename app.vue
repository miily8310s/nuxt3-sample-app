<script setup lang="ts">
interface ResData {
  id: number;
  title: string;
}
const { data: hello } = await useAsyncData(
  "hello",
  () => $fetch("/api/hello"),
  { pick: ["hoge"] }
);
const { data: todo } = await useFetch<string, ResData>("/todos/1", {
  pick: ["id", "title"],
  baseURL: "https://jsonplaceholder.typicode.com",
});
</script>

<template>
  <p>{{ hello.hoge }}</p>
  <p>{{ todo.id }} {{ todo.title }}</p>
</template>
