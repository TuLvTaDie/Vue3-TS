<script setup lang="ts">
import BaseChart from '@/components/BaseChart.vue'
import type { EChartsOption } from 'echarts'
import { ref } from 'vue'

type DateRange = typeof buttons[number]

const option: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    containLabel: false
  },

  xAxis: {
    type: 'category',
    show: false,        // ❗隐藏 X 轴
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', 'T恤', '外套', '连衣裙', '牛仔裤', '运动鞋', '皮鞋', '帽子', '围巾', '手套', '领带', '手表']
  },

  yAxis: {
    type: 'value',
    show: false,        // ❗隐藏 Y 轴
    min: 0
  },

  series: [
    {
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20, 15, 25, 30, 12, 8, 18, 22, 28, 14, 26],
      barWidth: '50%',   // 控制柱子宽度
      cursor: 'default',
      itemStyle: {
        color: '#3b82f6'
      }
    }
  ]
}
// 访问量平滑曲线数据
const option_smooth: EChartsOption = {
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },

  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false,
    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  },

  yAxis: {
    show: false,
  },

  series: [
    {
      type: 'line',
      smooth: 0.3,
      symbol: 'circle',
      symbolSize: 8,
      color: '#8b5cf6',   // 点的填充色
      showSymbol: false,   // 默认隐藏点
      lineStyle: {
        width: 0,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(167,139,250,0.6)'
            },
            {
              offset: 1,
              color: 'rgba(167,139,250,0)'
            }
          ]
        }
      },
      emphasis: {
        itemStyle: {
          color: '#8b5cf6',   // 点的填充色
          borderColor: '#fff', // 白色描边
          borderWidth: 2
        }
      },
      data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
    }
  ]
}
// 渐变背景颜色
const progressColor = 'linear-gradient(to right, #128EE7, #6CC185)';
const datetitle = ref('销售额')
// 默认当前年的1月1日到当前日期
const dateValue = ref<[Date, Date]>([new Date(new Date().getFullYear(), 0, 1), new Date()])
const buttons = ['今日', '本周', '本月', '本年'] as const
const selectedDateRange = ref<DateRange>('今日')
// 销售额柱状体数据
const option_salesData: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    // show: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    min: 0,
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(0,0,0,0.01)' // 越小越淡
      }
    }
  },
  series: [
    {
      type: 'bar',
      data: [5000, 7000, 8000, 6000, 9000, 11000, 13000, 12000, 15000, 17000, 16000, 20000],
      barWidth: '50%',
      cursor: 'default',
      itemStyle: {
        color: '#3b82f6'
      }
    }
  ]
} 
// 访问量柱状体数据
const option_visitsData: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    show: true,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    min: 0,
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(0,0,0,0.01)' // 越小越淡
      }
    }
  },
  series: [
    {
      type: 'bar',
      data: [800, 1200, 1500, 1000, 1800, 2200, 2500, 2300, 3000, 3500, 3200, 4000],
      barWidth: '50%',
      cursor: 'default',
      itemStyle: {
        color: '#8b5cf6'
      }
    }
  ]
}
// 销售额排名
const salesRanking = [
  { name: '工专路0号店', value: 323234 },
  { name: '工专路1号店', value: 289123 },
  { name: '工专路2号店', value: 256456 },
  { name: '工专路3号店', value: 223789 },
  { name: '工专路4号店', value: 190012 },
  { name: '工专路5号店', value: 157345 },
  { name: '工专路6号店', value: 123456 }
]
// 搜索用户数|人均搜索次数 平滑曲线数据
const option_searchData: EChartsOption = {
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },

  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false,
    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  },

  yAxis: {
    show: false,
  },

  series: [
    {
      type: 'line',
      smooth: 0.3,
      symbol: 'circle',
      symbolSize: 8,
      color: '#5d9cff',   // 点的填充色
      showSymbol: false,   // 默认隐藏点
      lineStyle: {
        width: 0,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(93,158,252,0.6)'
            },
            {
              offset: 1,
              color: 'rgba(93,158,252,0)'
            }
          ]
        }
      },
      emphasis: {
        itemStyle: {
          color: '#5d9cff',   // 点的填充色
          borderColor: '#fff', // 白色描边
          borderWidth: 2
        }
      },
      data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
    }
   ]
}
const dateChange = () => {
  console.log('日期范围变化了', dateValue)
}
// 切换日、周、月、年
const handleButtonClick = (range: DateRange) => {
  selectedDateRange.value = range
  console.log('选择了日期范围:', range)
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
    <div class="cards flex flex-nowrap justify-between">
      <div class="card">
        <p class="card_title">总销售额</p>
        <div class="card_content">
          <div class="flex justify-between items-center">
            <p class="card_content_title">总销售额</p>
            <el-tooltip content="指标说明" placement="top">
              <el-icon class="card_content_icon"><Warning /></el-icon>
            </el-tooltip>
          </div>
          <p class="card_content_num">￥128,451</p>
          <div class="card_content_bottom card_first flex-wrap" style="height: 47px; border: none;">
            <span class="mr-[16px]">
              周同比<span class="ml-[8px]">12%</span><span><el-icon color="#F5222D" size="16"><CaretTop /></el-icon></span>
            </span>
            <span class="mr-[16px]">
              日同比<span class="ml-[8px]">11%</span><span><el-icon color="#52C41A" size="16"><CaretBottom /></el-icon></span>
            </span>
          </div>
          <div class="card_content_bottom">
            <span class="mr-[16px]">
              日销售额<span class="ml-[8px]">￥12,423</span>
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <p class="card_title">访问量</p>
        <div class="card_content">
          <div class="flex justify-between items-center">
            <p class="card_content_title">访问量</p>
            <el-tooltip content="指标说明" placement="top">
              <el-icon class="card_content_icon"><Warning /></el-icon>
            </el-tooltip>
          </div>
          <p class="card_content_num">8,324</p>
          <BaseChart class="BaseChart" :option="option_smooth" />
          <div class="card_content_bottom">
            <span class="mr-[16px]">
              日访问量<span class="ml-[8px]">1,234</span>
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <p class="card_title">支付笔数</p>
        <div class="card_content">
          <div class="flex justify-between items-center">
            <p class="card_content_title">支付笔数</p>
            <el-tooltip content="指标说明" placement="top">
              <el-icon class="card_content_icon"><Warning /></el-icon>
            </el-tooltip>
          </div>
          <p class="card_content_num">1,234</p>
          <BaseChart class="BaseChart" :option="option" />
          <div class="card_content_bottom">
            <span class="mr-[16px]">
              转换率<span class="ml-[8px]">60%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <p class="card_title">运营活动效果</p>
        <div class="card_content">
          <div class="flex justify-between items-center">
            <p class="card_content_title">运营活动效果</p>
            <el-tooltip content="指标说明" placement="top">
              <el-icon class="card_content_icon"><Warning /></el-icon>
            </el-tooltip>
          </div>
          <p class="card_content_num">78%</p>
          <div class="BaseChart flex items-end">
            <el-progress style="width: 100%;" :percentage="78" :stroke-width="8" :color="progressColor" />
          </div>
          <div class="card_content_bottom">
            <span class="mr-[16px]">
              周同比<span class="ml-[8px]">12%</span><span><el-icon color="#F5222D" size="16"><CaretTop /></el-icon></span>
            </span>
            <span class="mr-[16px]">
              日同比<span class="ml-[8px]">11%</span><span><el-icon color="#52C41A" size="16"><CaretBottom /></el-icon></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="dateCards">
      <div class="dateCardsTitle flex justify-between">
        <div>
          <ul class="radio_ul relative">
            <li class="titLi" :class="{ active: datetitle === '销售额' }" @click="datetitle='销售额'">销售额</li>
            <li class="titLi" :class="{ active: datetitle === '访问量' }" @click="datetitle='访问量'">访问量</li>
            <div
              class="line"
              :class="{ move: datetitle === '访问量' }"
            ></div>
          </ul>
        </div>
        <div class="flex items-center pr-[24px]">
          <ul class="flex items-center radio_ul mr-[24px]">
            <li 
              v-for="item in buttons"
              :key="item">
              <el-button
                :type="item === selectedDateRange ? 'primary' : ''"
                @click="handleButtonClick(item)"
                text
              >
                {{ item }}
              </el-button>
            </li>
          </ul>
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @calendar-change="dateChange()"
          />
        </div>
      </div>
      <div class="flex justify-between">
        <!-- ECharts -->
        <div class="EChartsBox">
          <BaseChart :option="datetitle === '销售额' ? option_salesData : option_visitsData" style="height: 300px;" />
        </div>
        <!-- 门店销售额排名 -->
        <div class="salesBox">
          <p>门店销售额排名</p>
          <ul>
            <li v-for="(item, index) in salesRanking" :key="index" class="flex justify-between">
              <span class="itemContent"><span :class="index < 3 ? 'indexNum123' : 'indexNum'">{{ index + 1 }}</span>{{ item.name }}</span>
              <span class="itemNum">{{ item.value.toLocaleString() }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cardsThirdly flex flex-nowrap justify-between">
      <div class="echartsCards">
        <div class="title flex justify-between items-center">
          <span>线上热门搜索</span>
          <span class="moreButton flex">
            <el-icon><MoreFilled /></el-icon>
          </span>
        </div>
        <div class="echarts flex items-end">
          <div 
            class="card_content"
            v-for="i in 2"
            :key="i">
            <div class="flex items-center">
              <p class="card_content_title mr-[8px]">{{ i === 1 ? '搜索用户数' : '人均搜索次数' }}</p>
              <el-tooltip content="指标说明" placement="top">
                <el-icon class="card_content_icon"><Warning /></el-icon>
              </el-tooltip>
            </div>
            <div class="card_content_num flex items-center mt-[8px]">
              <span>{{ i === 1 ? '17.1' : '25.2' }}</span>
              <span class=" flex items-center">
                <el-icon :color="i === 1 ? '#F5222D' : '#52C41A'" size="16"><CaretTop v-if="i === 1" /><CaretBottom v-else /></el-icon>
              </span>
            </div>
            <BaseChart class="BaseChart" :option="option_searchData" />
          </div>
        </div>
        <div class="table"></div>
      </div>
      <div class="echartsCards">
        <div class="title flex justify-between">
          <span>销售额类别占比</span>
          <span class="moreButton flex">
            <el-icon><MoreFilled /></el-icon>
          </span>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
// css样式0.3s过渡
*{
  transition: all 0.3s ease;
}

// 穿透element-plus的样式，设置卡片的样式
:deep(.el-progress__text){
  min-width: 0;
  margin-left: 8px;
}
:deep(.el-progress-bar__inner) {
  position: relative;
  overflow: hidden;
}

/* 白色扫光 */
:deep(.el-progress-bar__inner)::after {
  content: "";
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.8) 50%,
    rgba(255,255,255,0) 100%
  );
  transform: skewX(-20deg);
  animation: shine 4s cubic-bezier(.4,0,.2,1) infinite;
}

/* 动画 */
@keyframes shine {
  0% {
    left: -40%;
  }
  30% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}
  .mainBox{
    // 内边距
    // padding: 32px 40px;
    margin: 32px 40px;
  }
  .cards{
    width: 100%;
    height: 240px;
    transition: all 0.3s ease;
    .card {
      width: 24%;
      padding: 0 0 8px 0;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      background-color: #fff;
      .card_title {
        height: 56px;
        line-height: 56px;
        // 下边框;
        border-bottom: 1px solid #f0f0f0;
        padding: 0 24px;
        font-size: 16px;
        font-weight: bold;
        color: #454545;
      }
      .card_content {
        padding: 16px 24px;
        .card_content_title {
          font-size: 14px;
          color: #595959;
        }
        .card_content_icon {
          :hover {
            // 鼠标变手型
            cursor: pointer;
          }
          font-size: 16px;
          color: #595959;
        }
        .card_content_num {
          font-size: 30px;
          color: #000;
        }
        .BaseChart {
          height: 46px;
        }
        .card_content_bottom {
          margin-top: 8px;
          padding-top: 9px;
          border-top: 1px solid #f0f0f0;
          display: flex;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.8);
          // 不换行，超出隐藏
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          span {
            display: flex;
            align-items: center;
          }
        }
        .card_first {
            margin-top: 0;
            padding-top: 0;
            border-top: none;
        }
      }
    }
  }
.dateCards {
  margin-top: 24px;
  background-color: #fff;
  border-radius: 6px;
  .dateCardsTitle {
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 24px;
  }
  .radio_ul {
    display: flex;
    height: 56px;
    .titLi {
      width: 80px;
      padding: 0 16px;
      height: 56px;
      line-height: 56px;
      color: #1F1F1F;
      &:hover {
        cursor: pointer;
        color: #40A9FF;
      }
    }
    .active {
      color: #1890FF !important;
    }
    .line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;          
      height: 2px;
      background-color: #1890ff;
      transition: transform 0.3s ease;
    }
    .move {
      transform: translateX(100%);
    }
  }
  .EChartsBox{
    width: 67%;
    padding: 0 0 32px 32px;
  }
  .salesBox {
    width: 33%;
    padding: 0 32px 32px 72px;
    p {
      font-size: 16px;
    }
    ul {
      margin-top: 25px;
      li {
        font-size: 14px;
        color: #595959;
        margin-bottom: 8px;
        margin-top: 16px;
        color: rgba(0, 0, 0, 0.88);
        .indexNum123{
          // 圆形背景
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background-color: #262626;
          border-radius: 50%;
          margin-right: 8px;
          color: #fff;
          font-weight: bold;
          font-size: 10px;
        }
        .indexNum {
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background-color: #F5F5F5;
          border-radius: 50%;
          margin-right: 8px;
          color: #1E1E1E;
          font-size: 10px;
        }
      }
    }
  }
}
.cardsThirdly {
  padding: 24px 0;
  .echartsCards{
    width: 48%;
    height: 300px;
    background-color: #fff;
    border-radius: 6px;
    // padding: 16px 24px;
    .title {
      height: 56px;
      line-height: 56px;
      // 下边框;
      border-bottom: 1px solid #f0f0f0;
      padding: 0 24px;
      font-size: 16px;
      font-weight: bold;
      color: #454545;
      .moreButton {
        height: 16px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .echarts {
      margin-top: 16px;
      .card_content {
        width: 48%;
        padding: 0 24px 16px 24px;
        .card_content_title {
          font-size: 14px;
          color: #595959;
        }
        .card_content_icon {
          :hover {
            // 鼠标变手型
            cursor: pointer;
          }
          font-size: 16px;
          color: #595959;
        }
        .card_content_num {
          font-size: 16px;
          color: #000;
        }
        .BaseChart {
          height: 46px;
        }
      }
    }
    .table {
      margin-top: 16px;
    }
  }
}
</style>