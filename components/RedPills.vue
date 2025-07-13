<script setup lang="ts">
const props = defineProps<{
  items: string[],
  activeItem: string,
}>()

const emit = defineEmits<{
  (e: "update:activeItem", tab: string): void;
}>();
</script>

<template>
<div class="flex gap-2">
  <Button rounded
    v-for="item in props.items" :key="item" :label="item" :severity="activeItem === item ? 'primary' : 'secondary'" @click="emit('update:activeItem', item)"
  />
</div>
</template>

<style scoped>
.p-button {
  --p-button-primary-background: var(--red-color);
  --p-button-primary-hover-background: var(--color-red-400);
  --p-button-secondary-background: var(--white-color);
  --p-button-secondary-hover-background: var(--color-yellow-50);
  --p-button-primary-border-color: var(--black-color);
  --p-button-primary-hover-border-color: var(--black-color);
  --p-button-secondary-border-color: var(--black-color);
  --p-button-secondary-hover-border-color: var(--black-color);


  border-width: 4px;
  padding-inline: calc(var(--spacing) * 6);
}

.p-button:hover {
  border-width: 4px;
}

</style>