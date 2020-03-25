<template>
	<div class="default-layout">
		<header>
      <div class="dl-logo">
        <router-link to="/">
          Vue Basics
        </router-link>
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
export default {

}
</script>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    
    background-color: $main-background-color;
    color: $main-text-color;
  }

  main {
    min-height: 100vh;
  }

  footer {
    padding: 20px 30px;

    background-color: $main-background-color;
    color: $main-text-color;
    font-weight: bold;
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