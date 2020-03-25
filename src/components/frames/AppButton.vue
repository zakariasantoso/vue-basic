<template>
	<button :class="[{'full-width': isFullWidth}, `${theme}-theme`]"
		@click="$emit('click')"
		:disabled="isLoading"
	>
		<app-loading :size="15" v-if="isLoading" color="white"/>
		<slot v-else/>
	</button>
</template>

<script>
import AppLoading from './AppLoading'

export default {
	components: {
		AppLoading
	},

	props: {
		isFullWidth: {
			type: Boolean,
			default: false
		},
		isLoading: {
			type: Boolean,
			default: false
		},
		theme: {
			type: String,
			default: 'default'
		}
	}
}
</script>

<style lang="scss">
button {
	padding: 5px 10px;
	min-width: 120px;

	background-color: $main-background-color;
	border: 1px solid black;
	border-radius: 5px;
	color: $main-text-color;
	font-size: 16px;
	outline: none;

	&:hover {
		text-decoration: underline;
	}	

	&:active {
		background-color: rgba($color: black, $alpha: 0.5);
	}

	&.primary-theme {
		background-color: rgb(0, 123, 255)
	}
	&.error-theme {
		background-color: rgb(220, 53, 69)
	}
	&.success-theme {
		background-color: rgb(40, 167, 69)
	}
}
</style>