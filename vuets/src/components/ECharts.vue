<template>
  <div ref="chartContainer"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
export default defineComponent({
  setup() {
    const chartContainer = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (chartContainer.value) {
        const chart = echarts.init(chartContainer.value);
        // 在这里使用ECharts实例进行图表的配置和数据处理
        // 设置图表配置项
        const options = {
          // 配置项...
        };

        // 设置图表数据
        const data = {
          // 数据...
        };

        // 将配置项和数据应用于图表
        chart.setOption(options);
      }
    });

    return {
      chartContainer,
    };
  },
})
</script>

<style>

</style>