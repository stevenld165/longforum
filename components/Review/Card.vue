<script setup lang="ts">
const { showRating = true, review } = defineProps<{
  showRating?: boolean,
  review: Review
}>()
</script>

<template>
  <div class="max-w-64 flex flex-col">
    <ReviewCardExtraInfo v-if="showRating" :review="review"/>
    <VideoCard :creator-top="!showRating" :video="review.video"/>
  </div>
</template>

<style scoped>

</style>