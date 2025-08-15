<script setup lang="ts">
const props = defineProps<{
  reviews: Review[]
}>()

const reviewsGroupedByDate = computed (() => {
  const dateMap = new Map<string, Review[]>();

  for (const review of props.reviews) {
    const current = dateMap.get(review.createdOn)

    if (current) {
      current.push(review)
    } else {
      dateMap.set(review.createdOn, [review])
    }
  }

  const resultArray : {date: string, reviews: Review[]}[] = [];

  for (const [date, reviews] of dateMap) {
    resultArray.push({
      date: date,
      reviews: reviews
    })
  }

  return resultArray
})

console.log(reviewsGroupedByDate)

</script>

<template>
<Timeline class="items-start" v-if="reviews != undefined" :value="reviewsGroupedByDate">
  <template #opposite="slotProps">
    <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
  </template>
  <template #content="slotProps">
    <div class="flex flex-col gap-2 mb-2" >
      <ReviewDetailedCard v-for="review in slotProps.item.reviews" :review="review" />
    </div>

  </template>

</Timeline>
</template>

<style scoped>
.p-timeline-event {
  width: 100%
}
</style>