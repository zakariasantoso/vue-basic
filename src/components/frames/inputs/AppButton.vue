<template>
	<button :class="{'full-width': isFullWidth}"
		@click="$emit('click')"
		:disabled="isLoading"
	>
		<app-loading :size="15" v-if="isLoading" color="white"/>
		<slot v-else/>
	</button>
</template>

<script>
import AppLoading from '../AppLoading'

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
		}
	}
}
</script>

<style lang="scss">
button {
	padding: 5px 10px;
	min-width: 120px;

	background-color: $main-background-color;
	border: 1px solid gray;
	border-radius: 5px;
	color: $main-text-color;
	// line-height: 16px;
	font-size: 16px;
	outline: none;

	&:hover {
		font-weight: bold;
	}	

	&:active {
		background-color: rgba($color: black, $alpha: 0.5);
	}
}
</style>