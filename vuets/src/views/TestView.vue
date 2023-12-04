<template>
  <div>
    <div>{{ data.num }}</div>
    <el-button @click="clickButton">按钮</el-button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    let data = reactive({
      num: 0
    })
    const clickButton = () => {
      data.num++
      console.log(data.num);
    }
    return {
      data,
      clickButton
    }
  }
}
</script>

<style>

</style>