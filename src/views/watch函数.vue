<template>
  <div>
    <h1>watch函数</h1>
    <ul>
      <li>原始数据{{ count }}</li>
      <li>{{ name }}</li>
      <li>{{ person }}</li>
    </ul>
    <button @click="count++">点击加一</button>
    <button @click="name = '小红'">点击变名</button>
    <button @click="cahngeAge">点击变岁数</button>
  </div>
</template>

<script>
// watch注重回调干事computed注重结果数据渲染
/* 1. 从vue框架中导入watch函数
2. 在setup函数中执行watch函数开启对响应式数据的监听
写法：watch(callback指定监听变量, callback被监听变量发生变化执行,options配置)
3. watch函数接收三个常规参数
   1. 第一个参数为函数，返回你要监听变化的响应式数据
   2. 第二个参数为响应式数据变化之后要执行的回调函数
   3. 第三个参数为一个对象，在里面配置是否开启立刻执行或者深度监听
 */
import { watch, ref } from 'vue'
export default {
  setup () {
    const count = ref(1)
    const name = ref('小刚')
    const person = ref({ mom: '小红', age: 14 })
    // 写法1
    watch(() => count.value, (newVal, oldVal) => {
      console.log('count变化了1：', newVal, oldVal)
    })
    // 写法2
    watch(name, (newName, oldName) => {
      console.log('名字变化了2', newName, oldName)
    })
    // 写法2 ===>监听多个变量数据
    watch([name, count], (newVal, oldval) => {
      console.log('名字变化了2', newVal, oldval)
    })
    // 写法3====》监听复杂类型
    const cahngeAge = function () {
      person.value.age = Math.floor(Math.random() * 100)
    }
    watch(person, (newVal, oldVal) => {
      // 不可更改复杂类型的地址
      // 此时因为是ref响应式复杂类型监听局部变化要开启深度监视/reactive不用 但是watch监听ref变化底层还是reactive的proxy对象 所以新值和老值都是proxy对象，在target对象中获取值
      console.log('年龄变化了3', newVal, oldVal)
    }, {
      deep: true
      // 如果想默认初始化就开启深度监视
      // immediate: true
    })
    return { count, person, name, cahngeAge }
  }
}
</script>

<style lang="scss" scoped>
</style>
