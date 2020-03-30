<template>
  <div class="vue-transition-page">
    <button @click="show = !show">click here</button>
    <transition name="hello">
      <h1 v-if="show">Hello World!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show: false
    }
  },
}
</script>

<style lang="scss">
.vue-transition-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .hello-enter-active, .hello-leave-active, {
    transition: 3s ;
  }
  .hello-leave-to {
    transform: translateY(-200%);
    opacity: 0;
  }
  .hello-enter {
    transform: translateY(-200%);
    opacity: 0;
  }
}
</style>