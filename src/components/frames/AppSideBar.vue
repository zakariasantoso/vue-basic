<template>
  <div :class="['sidebar', {close:!isOpen}]">
      <ul>
        <template v-for="(menu, index) in menus">
          <li :key="index"><router-link :to="menu.href">{{menu.title}}</router-link></li>
        </template>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  }

}
</script>

<style lang="scss">
.sidebar {
    transition: all .5s;
    width: 200px;
    background-color: $main-background-color;
    overflow: hidden;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    height: 100vh;
    &.close { 
      width: 0;
      transform: translateX(-100%);
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        a {
          text-decoration: none;
          display: block;
          color: $main-text-color;
          padding: 10px;
          &:hover {
            background-color: $main-hover-background-color;
            color: black;
          }
        }
      }
    }
  }
</style>