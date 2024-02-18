<template>
  <template v-for="(item, index) in menuList" :key="index">
    <!-- 如果当前菜单有下级,循环下级 -->
    <el-sub-menu
      v-if="item?.children && item?.children?.length > 0"
      :index="item?.id"
    >
      <template #title>
        <!-- <img class="icon_img" v-if="item?.icon" :src="`@/assets/static/image/${item.icon}.png`" alt=""> -->
        <svg-icon iconClass="talentPool" class="icon_color"></svg-icon>
        <span>{{ item?.label }}</span>
      </template>
    
    <!-- 递归调用自身 -->
      <MenuItem :menuList="item?.children"/>
    </el-sub-menu>

    <!-- 没有下级 -->
    <el-menu-item v-else :index="item?.id">
      <!-- <component :is="item?.icon" class="menu-icon"></component> -->
      <router-link class="routerClass" :to="item?.path">{{ item?.label }}</router-link>
      <template #title>
        <svg-icon iconClass="talentPool" class="icon_color"></svg-icon>
        <!-- <img class="icon_img" v-if="item?.icon" :src="require(`@/assets/static/image/${item.icon}${selectedKey == item.id ? '_select' : ''}.png`)" alt=""> -->
        <span>{{ item?.label }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  // props: ['menuList'],
})

</script>
<script lang="ts" setup>
import { defineProps } from 'vue'
interface MenuItem {
  children?: MenuItem[];
  id: string;
  label: string;
  icon: string;
  path: string;
}
const props = defineProps({
  menuList: {
    type: Array as () => MenuItem[],
    default: () => []
  },
  selectedKey: {
    type: String,
    default: ''
  }
});
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
  width: calc(100% - 40px);
  color: #000000;
  text-decoration: none;
  opacity: 0;
  position: absolute;
}
.routerClass:hover {
  color: rgba(64, 158, 255, 0.7);
}
.icon_img {
  width: 30px;
  height: 30px;
}

</style>
