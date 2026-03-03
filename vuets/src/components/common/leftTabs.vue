<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        router
        :default-active="activeMenu"
        :default-openeds="openeds"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <MenuItem :menuList="props.data"/>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from '@/components/common/MenuItem.vue'
import type { PropType } from 'vue'
import type { MenuItem as MenuItemType  } from '@/types/menu'

const props = defineProps({
  data: {
    type: Array as PropType<MenuItemType[]>,
    default: () => []
  }
});
const route = useRoute()
// 当前高亮
const activeMenu = computed(() => route.path)
// 自动展开父级
const openeds = computed(() => {
  const matched = route.matched
  return matched.map(r => r.path)
})
// const selectedKey = ref('3-1')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSelect = (key: string, keyPath: string[]) => {
  // selectedKey.value = key
  console.log(key, keyPath)
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