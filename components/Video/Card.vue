<script setup lang="ts">
const { creatorTop = false, video } = defineProps<{
  creatorTop?: boolean,
  video: Video
}>()

const durationClass = computed(() => {
  let className = ''
  if (video.duration < 1800)
    className = 'duration-short'
  else if (video.duration < 5400)
    className = 'duration-med'
  else if (video.duration < 10800)
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
  date.setSeconds(video.duration); // specify value for SECONDS here
  const timeString = date.toISOString().substring(11, 19).replace(/^[0:]+/, "");
  return(timeString)
})
</script>

<template>
  <div class="max-w-64 flex flex-col">
    <span v-if="creatorTop" class="" style="color: var(--dark-red-color)">{{ video.creatorName }}</span>
    <div class="video-card-hover flex flex-col items-end max-w-fit mb-4">
      <NuxtImg class="min-w-64 rounded-2xl" :src="video.thumbnail"/>
      <div class="text-(--white-color) max-w-fit py-1 px-4 rounded-xl -mt-11 mr-2" :class="durationClass">{{ durationString }}</div>
    </div>
    <span class="text-lg font-medium">{{ video.title }}</span>
    <span v-if="!creatorTop" class="text-sm" style="color: var(--dark-red-color)">{{ video.creatorName }}</span>
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
  box-shadow: 0 5px 15px -8px rgba(255, 84, 84, 0.5);
}
</style>