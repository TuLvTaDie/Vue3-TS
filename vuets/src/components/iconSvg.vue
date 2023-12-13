<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="`#icon-${props.iconClass}`"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
const props = defineProps({
  iconClass: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})
const svgClass = computed(() => {
  return props.className ? 'svg-icon ' + props.className : 'svg-icon'
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>