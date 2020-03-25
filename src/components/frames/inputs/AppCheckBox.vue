<template>
	<div class="app-check-box">
		<label :for="name">
			{{ getLabel }}
			<input
				type="checkbox"
				:id="name"
				:name="name"
				:checked="value"
				:disabled="disabled"
				@change="$emit('input', $event.target.checked)"
			>
			<span class="acb-checkmark"/>
		</label>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
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
		disabled: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		getLabel() {
			let label = this.label
			if (!label || label === '') {
				label = this.name
			}

			return label
		}
	},

	methods: {
		sendValue($event) {
			this.$emit('input', $event.target.value)
		}
	}

}
</script>

<style lang="scss">
.app-check-box {
	position: relative;
	display: flex;
	margin-bottom: 10px;

	label {
		display: block;
		position: relative;
		padding-left: 24px;
		cursor: pointer;
	
		input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
		}

		&:hover input ~ .acb-checkmark {
			background-color: #ccc;
		}

		& input:checked ~ .acb-checkmark:after {
			display: block;
		}

		& input:disabled {
			& ~ .acb-checkmark {
				border: 1px solid gray;
			}
			& ~ .acb-checkmark::after {
				left: 6px;
				top: 3px;
				width: 3px;
				height: 6px;
				border: solid gray;
				border-width: 0 3px 3px 0;
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				transform: rotate(45deg);
			}
		}

		& .acb-checkmark:after {
			left: 6px;
			top: 3px;
			width: 3px;
			height: 6px;
			border: solid black;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}

		// & input:checked ~ .acb-checkmark {
		// 	background-color: #2196F3;
		// }
	}

	.acb-checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 19px;
		width: 19px;

		border-radius: 5px;
		border: 1px solid black;
		background-color: #eee;

		&::after {
			content: "";
			position: absolute;
			display: none;
		}
	}





}
</style>