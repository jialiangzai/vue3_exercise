<template>
  <div>
    <h1>reactive函数的响应式定义data</h1>
    <h3>{{ formData }}</h3>
    <button @click="changeName">年龄</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
// 1. 从vue框架中导入reactive函数
// 2. 在setup函数中调用reactive函数并将对象数据传入
// 3. 在setup函数中把reactive函数调用完毕之后的返回值以对象的形式返回出去

export default {
  setup () {
    // 定义变量 ====》只能定义复杂类型(数组和对象)否则警告
    const formData = reactive({ name: '小刚', age: 22 })
    // 定义方法
    const changeName = () => {
      // setup是没有this的
      // 只能局部改，不能改地址也就是不能formData={xxxxx}也就是formData是只读的proxy
      formData.age = Math.floor(Math.random() * 10 + 1)
    }
    // 把变量返回给模板===》类似data中的return这里是简写形式 return { formData :formData}
    return { formData, changeName }
  }
}
</script>

<style lang="scss" scoped>
</style>
