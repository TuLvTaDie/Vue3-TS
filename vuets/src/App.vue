<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view/> -->
  <div id="app">
    <div class="header"></div>
    <div class="body">
      <div class="leftTabs">
        <leftTabs :data="menuList"/>
      </div>
      <div class="pageBody">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { testApi } from '@/api/index';
import leftTabs from '@/components/common/leftTabs.vue';
export default defineComponent({
  components: {
    leftTabs
  },
  setup() {
    let menuList: any = [
      {
        id: '1',
        path: '/',
        name: '平台人才库',
        label: '平台人才库',
        icon: 'talentPool_icon',
        url: '/talentPool',
        router: '',
        // children: [{
        //   id: '1-1',
        //   path: '/',
        //   name: '分析页',
        //   label: '分析页',
        //   url: '/page2',
        // },{
        //   id: '1-2',
        //   path: '/about',
        //   name: '监控页',
        //   label: '监控页',
        //   url: '/page2',
        // },{
        //   id: '1-3',
        //   path: '/test',
        //   name: '工作台',
        //   label: '工作台',
        //   url: '/page2',
        // },],
      },
      {
        id: '2',
        path: '/UserFilled',
        name: 'Edit',
        label: '表单页',
        icon: 'Edit',
        url: '/UserFilled',
        children: [{
          id: '2-1',
          path: '/about',
          name: '基础表单',
          label: '基础表单',
          url: '/page2',
          },{
          id: '2-2',
          path: '/about',
          name: '分步表单',
          label: '分步表单',
          url: '/page2',
        },{
          id: '2-3',
          path: '/about',
          name: '高级表单',
          label: '高级表单',
          url: '/page2',
        },],
      },
      {
        id: '3',
        path: '/Management',
        name: 'Grid',
        label: '列表页',
        icon: 'Grid',
        url: '/Management',
        children: [{
          id: '3-1',
          path: '/page1',
          name: '搜索列表',
          label: '搜索列表',
          url: '/page1',
          children: [{
            id: '3-1-1',
            path: '/test',
            name: '搜索列表（文章）',
            label: '搜索列表（文章）',
            url: '/page1',
          },{
            id: '3-1-2',
            path: '/about',
            name: '搜索列表（项目）',
            label: '搜索列表（项目）',
            url: '/page1',
          },{
            id: '3-1-3',
            path: '/',
            name: '搜索列表（应用）',
            label: '搜索列表（应用）',
            url: '/page1',
          },],
        },{
          id: '3-2',
          path: '/about',
          name: '查询列表',
          label: '查询列表',
          url: '/page1',
          children: [],
        },{
          id: '3-3',
          path: '/about',
          name: '标准列表',
          label: '标准列表',
          url: '/page1',
          children: [],
        },{
          id: '3-4',
          path: '/',
          name: '卡片列表',
          label: '卡片列表',
          url: '/page1',
          children: [],
        }],
      }
    ]
    return {
      menuList
    }
  },
  created() {
    // testApiFun()
  }
})
const testApiFun = async() => {
  try {
    let res = await testApi()
    console.log(res);
  } catch (error) {
    console.log('error', error);
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  .header {
    width: 100%;
    height: 80px;
    height: 4rem;
    background-color: #333;
  }

  .body {
    width: 100%;
    height: calc(100% - 80px);
    height: calc(100% - 4rem);
    display: flex;
    .leftTabs {
      width: 10%;
      height: 100%;
      background-color: #ffffff;
    }
    .pageBody {
      width: 90%;
      height: 100%;
      background-color: #f0f2f5;
    }
  }
}
</style>
