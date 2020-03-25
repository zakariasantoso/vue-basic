<template>
	<div class="app-input">
		<label :for="name">{{ label }}</label>

		<span class="ai-clear" @click="clearField()">&times;</span>
		
		<input
			:id="name"
			:name="name"
			:label="getLabel"
			:value="value"
			:placeholder="getPlaceholder"
			@input="sendValue($event)"
		>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		}
	},

	computed: {
		getPlaceholder() {
			let placeholder = this.placeholder
			if (!placeholder || placeholder === '') {
				placeholder = `Input ${this.getLabel}`
			}

			return placeholder
		},
		getLabel() {
			let label = this.label
			if (!label || label === '') {
				label = this.name
			}

			return label
		}
	},

	methods: {
		clearField() {
			this.$emit('input', '')
		},

		sendValue($event) {
			this.$emit('input', $event.target.value)
		}
	}

}
</script>

<style lang="scss">
.app-input {
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;

	label {
		margin-bottom: 2px;

		font-size: 14px;
	}

	input {
		padding: 5px 10px;
		border-radius: 5px;
		border: 1px solid gray;
		outline: none;
	}

	.ai-clear {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 18px;

		border-radius: 50%;
		font-size: 14px;
		text-align: center;
		user-select: none;

		&:hover {
			background-color: $main-background-color;
			color: $main-text-color;
		}

		cursor: pointer;
	}
}
</style>