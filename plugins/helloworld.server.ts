import { defineNuxtPlugin, useState } from "#app";

export default defineNuxtPlugin((_nuxt) => {
  const helloworld = useState<string>("helloworld", () => {
    return "hello world!!!!";
  });
});
