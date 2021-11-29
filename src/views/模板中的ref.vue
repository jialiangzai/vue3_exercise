<template>
  <div>
    <h1 ref="enenm">模板中ref的使用</h1>
  </div>
  <RefDemo ref="vinstance"></RefDemo>
  <h4 ref="reactiveNum">模板中使用ref之reactive响应式对象</h4>
</template>

<script>
// 只能是ref函数api使用
import { ref, onMounted, reactive } from 'vue'
import RefDemo from '@/components/childrefdemo.vue'
export default {
  components: {
    RefDemo
  },
  //   在模板中使用ref，我们都很清楚，它一般有两种使用场景
  // 1. ref + 普通dom标签  获取真实dom对象
  // 2. ref + 组件标签  获取组件实例对象

  setup () {
    //   1. 使用ref函数传入null创建 ref对象 =>  const 常量名称 = ref(null)
    //   2. 模板中通过定义ref属性等于1中创建的ref对象常量名称建立关联 => <h1 ref="常量名称"></h1>
    //   3. setup函数中必须返回：return { 常量名称 }
    //   4. 使用 => 常量名称.value
    const enenm = ref(null)
    const reactiveNum = reactive(null)
    const vinstance = ref()
    onMounted(() => {
      console.log('此时的ref对象(refimpl)', enenm)
      console.log('DOM对象或组件实例', enenm.value)
      console.log('DOM对象或组件实例的内容', enenm.value.innerText)
      // 上方是通过ref拿到DOM对象
      // 接下来那组件的实例vueinstance
      vinstance.value.fn()
      // 所以在模板中使用ref必须是ref函数api不能是reactive
      console.log('我是ref的reactive对象', reactiveNum)
    })
    return { enenm, vinstance, reactiveNum }
    /**
     * 知识点梳理：
     * 1. 首先引入ref函数必须是ref
     * 2.定义一个常量接收ref()/ref(null) 两种方式都可以
     * 3.setup中必须return{名字}
     * 4.模板中使用ref=""与vue2一致但是名字不是随便起的而是const常量名也就是引用对象
     * 5. 最重要的一点就是因为setup是在组件实例创建之前执行的且执行一次拿不到实例对象
     * 要在vue3中使用必须在onMounted生命周期钩子函数中=====拿到实例或DOM对象就可以调用他的方法或属性
     *
     * return：作用===第一挂载到组件的实例中  第二渲染模板
     */
  }
}
</script>

<style lang="scss" scoped>
</style>
