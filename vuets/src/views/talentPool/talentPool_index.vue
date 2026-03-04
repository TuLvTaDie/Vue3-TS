<script setup lang="ts">
import BaseChart from '@/components/BaseChart.vue'
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
  title: {
    text: '总销售额',
    textStyle: {
      color: '#333',
      fontSize: 16,
    }
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}
</script>

<template>
  <div class="mainBox">
    <!-- 展示ppt
    <svg-icon iconClass="ppt"></svg-icon>
    展示word
    <svg-icon iconClass="docx"></svg-icon>
    展示mp3
    <svg-icon iconClass="mp3"></svg-icon> -->
    <div class="cards">
      <div class="card" style="width: 600px; height: 400px">
        <span class="card_title">支付笔数</span>
        <BaseChart class="BaseChart" :option="option" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mainBox{
    // 内边距
    padding: 32px 40px;
  }
  .card {
    padding: 15px 0 8px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    .card_title {
      padding: 0 24px;
      font-size: 16px;
      font-weight: bold;
      color: #454545;
    }
    .BaseChart {
      padding: 0 18px;
    }
  }
</style>