<script setup lang="ts">
import UserEndpoint from "~/services/api/UserEndpoint";
import ListEndpoint from "~/services/api/ListEndpoint";
import ReviewEndpoint from "~/services/api/ReviewEndpoint";

const items = ["profile", "reviews"]
const activeItem = ref(items[0])

const route = useRoute()
const loading = ref(false);

const userData = ref<User>()
const userFavorites = ref<List>()
const userReviews = ref<Review[]>([])

const recentReviews = computed(() => {
  return userReviews.value?.slice(0,3)
})


onBeforeMount(async () => {
  loading.value = true

  const username = route.params.username as string

  userData.value = await UserEndpoint.getUserByUsername(username)
  userFavorites.value = await ListEndpoint.getFavoriteListByUsername(username)
  userReviews.value = await ReviewEndpoint.getReviewsByUsername(username)

  console.log(userData)
  loading.value = false
})
</script>

<template>
  <div v-if="userData" class="flex max-w-7xl m-auto gap-5 mt-4">
    <div class="flex-2 min-h-180">
      <div class="flex items-center justify-between h-36 ml-4" style="margin-bottom: calc(var(--spacing) * 12 * -1)">
        <div class="flex items-center gap-3">
          <Avatar :image="userData.profilePic.length > 0 ? userData.profilePic : undefined" :label="userData.profilePic ? '' : userData.username.substring(0,1)" size="xlarge" shape="circle"/>
          <h2 class="peach text-3xl font-semibold">{{ userData.displayName }}</h2>
          <span class="peach font-light mt-2">({{ userData.username }})</span>
        </div>
        <RedPills class="mr-4" :items="items" :active-item="activeItem" @update:active-item="activeItem = $event" style="margin-bottom: calc(var(--spacing) * 12 * -1)"/>
      </div>

      <div class="rounded-2xl white-bg py-4 px-6 min-h-full">
        <template v-if="activeItem == 'profile'">
          <template v-if="userFavorites && (userFavorites?.reviews.length ?? -1 > 0)">
            <h3 class="text-2xl font-semibold mt-10">favorites</h3>
            <div class="flex gap-2">
              <ReviewCard v-for="favorite in userFavorites.reviews" :review="favorite" :show-rating="false"/>
            </div>
          </template>
          <template v-if="recentReviews?.length ?? -1 > 0">
            <h3 class="text-2xl font-semibold mt-4">recent ratings</h3>
            <div class="flex gap-2">
              <ReviewCard v-for="review in recentReviews" :review="review" />
            </div>
          </template>
        </template>
        <template v-if="activeItem == 'reviews'">
          <h3 class="text-2xl font-semibold mt-10">reviews</h3>
          <UserReviewsDisplay :reviews="userReviews" />
        </template>


      </div>
    </div>
    <div class="flex-1 mt-24">
      <div class="min-h-48" style="color: var(--peach-color)">
        <h3 class="text-2xl">about</h3>
        <span>{{ userData.bio }}</span>
      </div>
      <div class="rounded-2xl white-bg py-4 px-6">
        <h3 class="text-2xl font-semibold">lists</h3>
      </div>
    </div>
  </div>


</template>

<style scoped>
.p-avatar {
  border: 5px solid var(--black-color);
  width: 8rem;
  height: 8rem;
}
</style>