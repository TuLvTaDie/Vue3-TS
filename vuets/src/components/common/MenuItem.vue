<template>
  <template v-for="(item, index) in menuList" :key="index">
    <!-- 如果当前菜单有下级,循环下级 -->
    <el-sub-menu
      v-if="item?.children && item?.children?.length > 0"
      :index="item?.id"
    >
      <template #title>
        <el-icon class="menu-icon" v-if="item?.icon">
        <!-- 遍历icon -->
          <component :is="item?.icon"></component>
        </el-icon>
        <span>{{ item?.label }}</span>
      </template>
    
    <!-- 递归调用自身 -->
      <MenuItem :menuList="item?.children"/>
    </el-sub-menu>

    <!-- 没有下级 -->
    <el-menu-item v-else :index="item?.id">
      <component :is="item?.icon" class="menu-icon"></component>
      <router-link class="routerClass" :to="item?.path">{{ item?.label }}</router-link>
      <template #title>{{ item?.label }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  Document,
  UserFilled,
  Location,
  Setting,
  Odometer,
  Edit,
  Grid,
  Menu as IconMenu,
} from '@element-plus/icons-vue';
export default defineComponent({
  name: 'MenuItem',
  props: ['menuList'],
  components: {
    Location,
    Setting,
    IconMenu,
    Document,
    Odometer,
    Edit,
    Grid,
    UserFilled,
  },
})

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu-icon{
  width: 24px;
  height: 24px;
}
.routerClass {
  width: 100%;
  color: #000000;
  text-decoration: none;
  opacity: 0;
  position: absolute;
}
.routerClass:hover {
  color: rgba(64, 158, 255, 0.7);
}
</style>
