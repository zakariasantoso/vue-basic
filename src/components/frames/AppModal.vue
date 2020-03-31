<template>
<div>
		<div class="app-modal">
			<div class="am-backdrop" 
				@click="closeModal()"
				v-if="isModalOpen"
			/>
		<transition name="modal">
			<div class="am-body" v-if="isModalOpen"	>
				<span class="am-close" @click="closeModal()">&times;</span>

				<div class="am-title">
					{{ title }}
				</div>

				<div class="am-content">
					<slot/>
				</div>

				<div class="am-action" v-if="hasAction">
					<app-button
						@click="closeModal()"
					>
						Close
					</app-button>

					<button
						@click="( ($event) => {executeAction($event)})"
					>
						{{ actionText }}
					</button>
				</div>
			</div>
			</transition>
		</div>
</div>
</template>

<script>
import AppButton from "./AppButton.vue"

export default {
	components: {
		AppButton
	},

	props: {
		isModalOpen: {
			type: Boolean,
			required: true,
			default: false
		},
		title: {
			type: String
		},
		hasAction: {
			type: Boolean,
			default: true
		},
		actionText: {
			type: String,
			default: 'OK'
		}
	},

	methods: {
		closeModal() {
			this.$emit('close');
		},

		executeAction(e) {
			console.log("Event : ", e);
			this.$emit('action');
		}
	}
}
</script>

<style lang="scss">
.app-modal {
	position: fixed;
	// top: 0;
	// right: 0;
	// bottom: 0;
	// left: 0;
	z-index: 100;

	// display: flex;
	// align-items: center;

	.am-backdrop {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background-color: rgba($color: black, $alpha: 0.3);
	}

	.am-body {
		position: fixed;
		min-width: 300px;
		width: 80%;
		min-height: 80%;
		height: 200px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		// margin: 0px auto;
		padding: 10px 20px;

		flex: 0 1 80%;
		display: flex;
		flex-direction: column;

		border-radius: 10px;
		background-color: whitesmoke;
	}

	.am-close {
		position: absolute;
		top: 10px;
		right: 20px;
		width: 24px;
		z-index: 1;

		border: 1px solid black;
		border-radius: 50%;
		font-size: 18px;
		text-align: center;
		cursor: pointer;
	}

	.am-title {
		padding: 10px 0px;
		text-align: center;
		border-bottom: 1px solid lightgray;
	}

	.am-content {
		height: 100%;
		padding: 10px 0px;
	}
	
	.am-action {
		display: flex;
		justify-content: flex-end;
		padding: 10px 0px;

		border-top: 1px solid lightgray ;

		> * {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}
}
	.modal-enter-active {
    transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		> .am-backdrop {
			background-color: transparent !important;
		}
  }
  .modal-leave-active {
		transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		> .am-backdrop {
			background-color: transparent !important;
		}
  }
  .modal-leave-to, .modal-enter {
		transform: translate(-50%, -150%) scale(2) !important;
    opacity: 0;
  }
  .modal-enter-to, .modal-leave {
		transform: translate(-50%, -50%) scale(1) !important;
    opacity: 1;
  }
</style>