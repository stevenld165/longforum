<script setup lang="ts">
const { hideTextIcon, review } = defineProps<{
  hideTextIcon ?: boolean,
  review: Review
}>()
</script>

<template>
  <div class="flex gap-1 items-center" :style="{color: review.burgers !== 0 ? 'var(--red-color)' : 'var(--peach-color)'}">
    <div v-if="review.burgers != null" class="max-h-min" v-tooltip.top="`${review.burgers / 2} / 5`">
      <template v-for="n in review.burgers">
        <Icon
            v-if="!(n % 2 != 0 && n < review.burgers)"
            :name="(n % 2 == 0) ? 'ph:hamburger-fill' : 'ph:hamburger-light'"/>
      </template>
      <Icon
          v-if="review.burgers == 0"
          name="ph:hamburger-light"/>
    </div>
    <span v-if="(review.reviewText.length > 0 && !hideTextIcon) || review.isLiked">|</span>
    <div >
      <Icon
          v-if="review.reviewText.length > 0 && !hideTextIcon"
          name="ph:chat-fill"
          v-tooltip.top="review.reviewText"
      />
      <Icon
          v-if="review.isLiked"
          name="ph:heart-fill"/>
    </div>
  </div>
</template>

<style scoped>

</style>