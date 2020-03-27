<template>
  <div class="user-badge">
    <div class="ub-badge">
        <router-link to="/profile" :title="email">
          {{firstName}} {{lastName}}
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.user-badge {
  .ub-badge {
    font-size: 18px;

    a {
      display: inline-block;
      padding: 10px 20px;

      border-radius: 5px;
      margin: 5px;
      text-decoration: none;
      color: $main-text-color;
      text-transform: capitalize;

      &:hover {
        background-color: $main-hover-background-color;
        color: black;
      }
    }

  }
}
</style>