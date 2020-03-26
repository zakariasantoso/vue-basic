<template>
  <div class="app-loading">
    <div class="al-wrapper" :style="{height:`${size}px`,width:`${size}px`,color:color}">
      <div class="al-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25 25 50 50"
          style="transform: rotate(0deg);"
        >
          <circle
            class="al-overlay"
            fill="transparent"
            cx="50"
            cy="50"
            r="20"
            stroke-width="4"
            stroke-dasharray="125.664"
            stroke-dashoffset="125.66370614359172px"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
		size: {
			required: false,
			default: 80
		},
		color: {
			required: false,
			default: 'black'
		}
	}
};
</script>

<style lang="scss" scoped>
.app-loading {
  display: inline-block;

  .al-wrapper {
    position: relative;
    display: flex;
  }

  .al-overlay {
    animation: progress-circular-dash 1.4s ease-in-out infinite;
    stroke-linecap: round;
    stroke-dasharray: 80, 200;
    stroke-dashoffset: 0px;
    stroke: currentColor;
    z-index: 2;
    transition: all 0.6s ease-in-out;
  }

  .al-content svg {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    transform-origin: center center;
    transition: all 0.2s ease-in-out;
    animation: progress-circular-rotate 1.4s linear infinite;
  }

  @keyframes progress-circular-rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes progress-circular-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0px;
      color: red;
    }

    50% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -15px;
      color: blue;
    }

    100% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -125px;
      color: yellow;
    }
  }

  svg:not(:root) {
    overflow: hidden;
  }
}
</style>
