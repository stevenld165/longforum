<script setup lang="ts">
import {ref} from "vue";
import type {MenuItem} from "primevue/menuitem";

const items = ["profile", "something"]
const activeItems = ref(items[0])

const placeholderReview : Review = {
  video: {
    title: "The Spectacular Failure of the Star Wars Hotel",
    creator: "Jenny Nicholson",
    link: "https://www.youtube.com/watch?v=T0CpOYZZZW4&pp=ygUOamVubnkgbmljb2xzb24%3D",
    thumbnail: "https://i.ytimg.com/vi/T0CpOYZZZW4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCT33gkbK7okjm0feErdOSgo-c6QQ",
    duration: 14735,
  },
  rating: 9,
  review: "This was a good use of 4 hours",
  isLiked: false,
  tags: []
}

const placeholderReviewShort : Review = {
  video: {
    title: "we need more political superheroes",
    creator: "Making Media Matter",
    link: "https://www.youtube.com/watch?v=jXy8sP0Dsgs&pp=ygUid2UgbmVlZCBtb3JlIHBvbGl0aWNhbCBzdXBlcmhlcm9lcw%3D%3D",
    thumbnail: "https://i.ytimg.com/vi/jXy8sP0Dsgs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkfdZkxZZi552iTWHHsMstZ6XyGw",
    duration: 1183,
  },
  rating: 10,
  review: "cool video yay",
  isLiked: true,
  tags: []
}

const placeholderReviewLong : Review = {
  video: {
    title: "Sleeping Beauty Deserves a Better Ending",
    creator: "Noralities",
    link: "https://www.youtube.com/watch?v=xxy0ZtIFSlk&pp=ygUoc2xlZXBpbmcgYmVhdXR5IGRlc2VydmVzIGEgYmV0dGVyIGVuZGluZw%3D%3D",
    thumbnail: "https://i.ytimg.com/vi/xxy0ZtIFSlk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA6Lqcnh9UNQA4gOnN9CNxRGLRKmw",
    duration: 5173,
  },
  rating: 10,
  review: "super intrieging look through the evolution of sleeping beauty and great commentary on the nature of how all fairy tales are big games of telephone through time",
  isLiked: true,
  tags: []
}

const placeholderReviewNothing : Review = {
  video: {
    title: "WordGirl Could Beat Superman (and all of fiction) 37 minutes",
    creator: "Noah Boulter",
    link: "https://www.youtube.com/watch?v=qXJuLaXPYnQ",
    thumbnail: "https://i.ytimg.com/vi/qXJuLaXPYnQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC1SK7Zu97pWzmaDVGgkyOzhpIJkQ",
    duration: 2258,
  },
  rating: 0,
  review: "horrible repetitive mess of a video. actually completely loses the rails at the end like bestie...",
  isLiked: false,
  tags: []
}
</script>

<template>
  <div class="flex max-w-7xl m-auto gap-5 mt-4">
    <div class="flex-2 min-h-180">
      <div class="flex items-center justify-between h-36 ml-4" style="margin-bottom: calc(var(--spacing) * 12 * -1)">
        <div class="flex items-center gap-3">
          <Avatar label="P" size="xlarge" shape="circle"/>
          <h2 class="text-3xl font-semibold">username</h2>
        </div>
        <RedPills class="mr-4" :items="items" :active-item="activeItems" @update:active-item="activeItems = $event" style="margin-bottom: calc(var(--spacing) * 12 * -1)"/>
      </div>

      <div class="rounded-2xl white-bg py-4 px-6 min-h-full">
        <h3 class="text-2xl font-semibold mt-10">favorites</h3>
        <div class="flex gap-2">
          <VideoCard :review="placeholderReview" :show-rating="false"/>
          <VideoCard :review="placeholderReviewShort" :show-rating="false"/>
          <VideoCard :review="placeholderReviewLong" :show-rating="false"/>
        </div>
        <h3 class="text-2xl font-semibold mt-4">recent ratings</h3>
        <div class="flex gap-2">
          <VideoCard :review="placeholderReview" />
          <VideoCard :review="placeholderReviewLong"/>
          <VideoCard :review="placeholderReviewNothing"/>
        </div>
      </div>
    </div>
    <div class="flex-1 mt-24">
      <div class="min-h-48" style="color: var(--peach-color)">
        <h3 class="text-2xl">about</h3>
        <span>sdfasldkfjsadlfjkasdfljfsd<br>
        asldkfjasdlfjk<br>
        asdfklj</span>
      </div>
      <div class="rounded-2xl white-bg py-4 px-6">
        <h3 class="text-2xl font-semibold">lists</h3>
      </div>
    </div>
  </div>


</template>

<style scoped>
h2 {
  color: var(--peach-color);
}

.p-avatar {
  border: 5px solid var(--black-color);
  width: 8rem;
  height: 8rem;
}
</style>