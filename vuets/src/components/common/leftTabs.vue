<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <MenuItem :menuList="props.data"/>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from '@/components/common/MenuItem.vue'
export default defineComponent({
  name: 'leftTabs',
})
</script>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
export interface ColumnProps{
  id: any,
  path: any,
  name: any,
  label: any,
  icon: any,
  url: any,
  router: any,
  children: any
}
const props = defineProps({
  data: {
    type: Array as PropType<ColumnProps[]>,
    default: () => []
  }
});
const router = useRouter()
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<style lang="scss">
  .el-menu-item-group__title {
    display: none;
  }
  .el-menu-item:hover {
    color: rgba($color: #409EFF, $alpha: 0.7);
    background-color: rgba($color: #409EFF, $alpha: .1)
  }
</style>