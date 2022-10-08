<template>
  <div class="w-200px flex justify-between items-center">
    <div>{{ name }}</div>
    <div>text</div>
    <div>text</div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "@/stores";
const { user } = useStore();
const { name } = storeToRefs(user);
</script>
