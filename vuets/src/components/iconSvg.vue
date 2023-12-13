<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.iconClass}`"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  iconClass: {
    type: String,
    default: ''
  }
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