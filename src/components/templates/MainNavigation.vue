<template>
	<nav>
		<ul>
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/todo">Todo List</router-link>
			</li>
			<li>
				<router-link to="/todoApi">Todo API</router-link>
			</li>
			<li>
				<router-link to="/store">Store</router-link>
			</li>
			<li>
				<router-link to="/route">Route Guard</router-link>
			</li>
			<li>
				<router-link to="/mixin">Mixin</router-link>
			</li>
		</ul>

		<ul>
			<li>
				<router-link to="/showcase">RnD</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav {
	display: flex;
	justify-content: space-between;
	
	ul {
		display: flex;
		margin: 0px;
		padding: 0px;

		list-style: none;
	}

	li {
		display: block;
	}

	a {
		display: block;
		padding: 10px;
		min-width: 120px;

		color: $main-text-color;
		text-decoration: none;
		text-align: center;

		&:hover {
			background-color: $main-hover-background-color;
			color: black;
		}

		&.router-link-exact-active {
			text-decoration: underline;
			font-weight: bold;
		}
	}
}
</style>