<template>
  <div id="app">
    <layout>
      <template v-slot:navigation>
        <main-navigation />
      </template>
      <router-view />
    </layout>
  </div>
</template>

<script>
import Layout from "./layouts/default.vue"
import MainNavigation from "./components/elements/MainNavigation"

export default {
  components: {
    Layout,
    MainNavigation
  }
}
</script>

<style lang="scss">
</style>
