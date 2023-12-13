import SvgIcon from '@/components/iconSvg.vue'

// 1. 导入所有的 svg 图标(图片地址，是否递归地址下的子目录，正则表达式)
const svgRequire = require.context('@/icons/svg', false, /\.svg$/)
// 1.2. 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标
console.log(svgRequire.keys())
svgRequire.keys().forEach((svgIcon: string) => {
  // 1.3. 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入
  svgRequire(svgIcon)
})

// 2. 完成 SvgIcon 的全局注册
const installIcons: (app: any) => void = (app) => {
  app.component('svg-icon', SvgIcon)
}

export default installIcons