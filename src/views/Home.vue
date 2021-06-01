<template>
  <div class="home">
    <navigation></navigation>
    <router-view :key="$route.fullPath"/>
    <bottom></bottom>
  </div>
</template>

<script>
import navigation from "../components/navigation/navigation.vue"
import bottom from "../components/bottom/bottom.vue"
import index from "./index/index.vue"

export default {
  name: 'Home',
  components: {
    navigation,
    bottom,
    index

  }
}
</script>