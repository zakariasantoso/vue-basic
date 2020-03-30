<template>
	<div class="todo-api-detail bordered">
		<div class="tdc-title">{{id}}. {{ title }}</div>

		<div class="tdc-body">
			User Id : {{userId}}
      <p>
        {{body}}
      </p>
		</div>
	</div>
</template>

<script>

export default {

	props: {
		title: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		},
		id: {
			type: Number,
			required: true
		},
		userId: {
			type: Number,
			required: true
		}
	},
}
</script>

<style lang="scss">
.todo-api-detail {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 20px;
	min-height: 200px;

	background-color: white;

	.tdc-title {
		text-align: center;
		padding: 0px 10px 10px;
		border-bottom: 1px solid #DFDFDF;
		font-size: 20px;
		text-decoration: underline;
		font-weight: bold;
		text-transform: capitalize;
	}

	.tdc-body {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.tdc-action {
		display: flex;
		flex-direction: column;
		padding: 10px;

		border-top: 1px solid #DFDFDF;

		> * {
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
	}
}
</style>