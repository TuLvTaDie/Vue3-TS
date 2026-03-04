<template>
  <div ref="chartRef" class="base-chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import echarts from '@/util/echarts'
import type { EChartsOption } from 'echarts'

interface Props {
  option: EChartsOption
  theme?: string
  loading?: boolean
}

const props = defineProps<Props>()

const chartRef = ref<HTMLDivElement | null>(null)
let chartInstance: ReturnType<typeof echarts.init> | null = null
let resizeObserver: ResizeObserver | null = null

// 初始化图表
const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value, props.theme)

  if (props.option) {
    chartInstance.setOption(props.option)
  }

  if (props.loading) {
    chartInstance.showLoading()
  }
}

// 监听 option 变化
watch(
  () => props.option,
  (newOption) => {
    if (chartInstance && newOption) {
      chartInstance.setOption(newOption, true)
    }
  },
  { deep: true }
)

// 监听 loading 状态
watch(
  () => props.loading,
  (val) => {
    if (!chartInstance) return
    val ? chartInstance.showLoading() : chartInstance.hideLoading()
  }
)

// 自动 resize
const setupResizeObserver = () => {
  if (!chartRef.value) return

  resizeObserver = new ResizeObserver(() => {
    chartInstance?.resize()
  })

  resizeObserver.observe(chartRef.value)
}

onMounted(async () => {
  await nextTick()
  initChart()
  setupResizeObserver()
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  chartInstance?.dispose()
  chartInstance = null
})
</script>

<style scoped>
.base-chart {
  width: 100%;
  height: 100%;
}
</style>