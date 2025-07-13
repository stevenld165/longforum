<script setup lang="ts">

</script>

<template>
  <header class="px-6 py-3 flex justify-between items-center">
    <h1 class="font-extrabold text-3xl">Longforum</h1>
    <div class="flex items-center gap-3">
      <span>home</span>
      <span>profiles</span>
      <Button rounded label="new review" icon="pi pi-plus"/>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--dark-red-color);
  color: var(--white-color)
}
</style>