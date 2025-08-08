<script setup lang="ts">
const { showRating = true, review } = defineProps<{
  showRating?: boolean,
  review: Review
}>()

const durationClass = computed(() => {
  let className = ''
  if (review.video.duration < 1800)
    className = 'duration-short'
  else if (review.video.duration < 5400)
    className = 'duration-med'
  else if (review.video.duration < 10800)
    className = 'duration-long'
  else {
    className = 'duration-superlong'
  }

  return {
    [className]: true
  }
})

const durationString = computed(() => {
  const date = new Date(0);
  date.setSeconds(review.video.duration); // specify value for SECONDS here
  const timeString = date.toISOString().substring(11, 19).replace(/^[0:]+/, "");
  return(timeString)
})
</script>

<template>
<div class="max-w-64 flex flex-col">
  <div v-if="showRating" class="flex gap-1 items-center" :style="{color: review.burgers !== 0 ? 'var(--red-color)' : 'var(--peach-color)'}">
    <div class="max-h-min">
      <template v-for="n in review.burgers">
        <Icon
            v-if="!(n % 2 != 0 && n < review.burgers)"
            :name="(n % 2 == 0) ? 'ph:hamburger-fill' : 'ph:hamburger-light'"/>
      </template>
      <Icon
          v-if="review.burgers == 0"
          name="ph:hamburger-light"/>
    </div>
    <span v-if="review.reviewText.length > 0 || review.isLiked">|</span>
    <div>
      <Icon
          v-if="review.reviewText.length > 0"
          name="ph:chat-fill"/>
      <Icon
          v-if="review.isLiked"
          name="ph:heart-fill"/>
    </div>

  </div>
  <span v-else class="" style="color: var(--dark-red-color)">{{ review.video.creatorName }}</span>
  <div class="video-card-hover flex flex-col items-end max-w-fit mb-4">
    <NuxtImg class="w-64 rounded-2xl" :src="review.video.thumbnail"/>
    <div class="text-(--white-color) max-w-fit py-1 px-4 rounded-xl -mt-11 mr-2" :class="durationClass">{{ durationString }}</div>
  </div>
  <span class="text-lg font-medium">{{ review.video.title }}</span>
  <span v-if="showRating" class="text-sm" style="color: var(--dark-red-color)">{{ review.video.creatorName }}</span>
</div>
</template>

<style scoped>
img {
  border: 4px solid var(--black-color);
}

.duration-short {
  background-color: var(--peach-color);
  color: var(--black-color);
}

.duration-med {
  background-color: var(--black-color);
}

.duration-long {
  background-color: var(--dark-red-color);
}

.duration-superlong {
  background-color: var(--red-color);
}

.video-card-hover img{
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.video-card-hover img:hover {
  box-shadow: 0 5px 15px -8px rgba(0,0,0,0.5);
}
</style>