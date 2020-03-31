<template>
  <div class="vue-transition-page">
    <button @click="isFallEffectShowed = !isFallEffectShowed">Fall Effect</button>
    <transition name="fall-effect">
      <h1 v-if="isFallEffectShowed">Falling Down</h1>
    </transition>
    <button @click="isRollEffectShowed = !isRollEffectShowed" >Roll Effect</button>
    <transition name="roll-effect">
      <h1 v-if="isRollEffectShowed">'&lt;'</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isFallEffectShowed: false,
      isRollEffectShowed: false
    }
  }
}
</script>

<style lang="scss">
.vue-transition-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
  .fall-effect-enter-active {
    transition: 1.5s ease-out;
  }
  .fall-effect-leave-active {
    transition: 3s ease-in;
  }
  .fall-effect-leave-to {
    transform: translateY(1000%)  ;
    opacity: 0;
  }
  .fall-effect-enter {
    transform: translateY(-200%);
    opacity: 0;
  }
  .roll-effect-enter-active {
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .roll-effect-leave-active {
    transition: 1.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .roll-effect-leave-to {
    transform: translateX(1500%) rotate(1440deg);
  }
  .roll-effect-enter {
    transform: translateX(1000%) rotate(1440deg);
  }
}
</style>