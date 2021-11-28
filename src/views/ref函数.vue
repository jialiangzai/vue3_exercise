<template>
  <div>
    <h1>ref函数定义变量</h1>
    <ul>
      <li>基本类型{{ count }}</li>
      <li>复杂类型(对象){{ person }}</li>
      <li @click="changeNumber">复杂类型(数组){{ numbers }}</li>
      <li v-show="isShow" class="boxShow" @click="changeShow">
        我是响应式的哟
      </li>
    </ul>
  </div>
</template>

<script>
// 1. 从vue框架中导出ref函数
// 2. 在setup函数中调用ref函数并传入数据（简单类型或者复杂类型）
// 3. 在setup函数中把ref函数调用完毕的返回值以对象的形式返回出去
// 4. 注意⚠️：在setup函数中使用ref结果，需要通过.value  访问，模板中使用不需要加.value；而且可以重新=号赋值
import { ref } from 'vue'
export default {
  setup () {
    // 简单
    const count = ref(1)
    const isShow = ref(true)
    const person = ref({ name: '小刚', age: 3 })
    const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const changeNumber = () => {
      numbers.value.push(Math.floor(Math.random() * 100 + 1))
    }
    const changeShow = () => {
      isShow.value = !isShow.value
    }
    return { count, person, numbers, changeNumber, isShow, changeShow }
  }
}
</script>

<style lang="scss" scoped>
.boxShow {
  width: 400px;
  height: 400px;
  background-color: aqua;
}
</style>
