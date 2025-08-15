<script setup lang="ts">
const { review } = defineProps<{
  review: Review
}>()

</script>

<template>
  <div class="max-w-64 flex gap-5 items-center">
    <VideoCard :creator-top="true" :video="review.video"/>
    <div class="min-w-fit">
      <ReviewCardExtraInfo class="text-xl" :hide-text-icon="true" :review="review"/>
      <p>{{ review.reviewText }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>