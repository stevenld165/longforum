<script setup lang="ts">
const items = ["profile", "reviews"]
const activeItems = ref(items[0])

const route = useRoute();

const userData = ref<User>();
const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true;
  userData.value = await $fetch(`http://localhost:5145/api/User/${route.params.username}`)
  console.log(userData)
  loading.value = false;
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
        <RedPills class="mr-4" :items="items" :active-item="activeItems" @update:active-item="activeItems = $event" style="margin-bottom: calc(var(--spacing) * 12 * -1)"/>
      </div>

      <div class="rounded-2xl white-bg py-4 px-6 min-h-full">
        <template v-if="userData.favorites">
          <h3 class="text-2xl font-semibold mt-10">favorites</h3>
          <div class="flex gap-2">
            <VideoCard v-for="favorite in userData.favorites" :review="favorite" :show-rating="false"/>
          </div>
        </template>
        <template v-if="userData.recentReviews">
          <h3 class="text-2xl font-semibold mt-4">recent ratings</h3>
          <div class="flex gap-2">
            <VideoCard v-for="review in userData.recentReviews" :review="review" />
          </div>
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