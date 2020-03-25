<template>
	<div class="app-form">
		<h3 v-if="title">{{ title }}</h3>
		<form @submit.prevent>
			<slot />
		</form>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: false
		}
	}
}
</script>

<style lang="scss">
.app-form {
	display: flex;
	flex-direction: column;
	padding: 0px 30px 30px;
	margin-bottom: 10px;

	border: 1px solid black;
	border-radius: 5px;

	h3 {
		text-align: center;
	}

	form > * {
		&:not(:last-child) {
			margin-bottom: 10px;
		}
	}
}
</style>