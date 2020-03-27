<template>
	<div class="default-layout">
		<header>
      <div class="dl-top">
        <div class="dl-logo">
          <router-link to="/">
            Vue Basics
          </router-link>
        </div>

        <user-badge v-if="authenticatedUser && Object.keys(authenticatedUser).length > 0"
          :first-name="authenticatedUser.firstName"
          :last-name="authenticatedUser.lastName"
          :email="authenticatedUser.email"
        />
      </div>

      <slot name="navigation"/>
    </header>

		<main>
      <slot/>
    </main>

		<footer>
			<span>&copy;{{ new Date().getFullYear() }} Zakaria Santoso</span>
		</footer>
	</div>
</template>

<script>
import UserBadge from "../components/frames/UserBagde";
export default {
  components: {
    UserBadge
  },
  
  computed: {
    authenticatedUser() {
      return this.$store.getters.getAuthenticatedUser;
    }
  }
}
</script>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    display: flex;
    flex-direction: column;
    
    background-color: $main-background-color;
    color: $main-text-color;
  }

  main {
    min-height: 100vh;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-right: -17px;
    padding-right: -17px;
  }

  footer {
    padding: 20px 30px;

    background-color: $main-background-color;
    color: $main-text-color;
    font-weight: bold;
  }

  .dl-top {
    display: flex;
    justify-content: space-between; 
  }

  .dl-logo {
    font-size: 24px;
    font-weight: bold;

    a {
      display: inline-block;
      padding: 10px 20px;

      text-decoration: none;
      color: $main-text-color;

      &:hover {
        background-color: $main-hover-background-color;
        color: black;
      }
    }

  }
}
</style>