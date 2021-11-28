<template>
  <div>
    <h2>computed函数和v2大部分一致</h2>
    <ul>
      <li v-for="(v, i) in list" :key="i" @click="del(i)">{{ v }}</li>
      <li>大于3的个数{{ thridNumber }}</li>
      <li>0变化加一百{{ ffn }}</li>
    </ul>
    <button @click="addData">随机添加</button>
  </div>
</template>

<script>
/** 使用步骤**
1. 从vue框架中导入`computed` 函数
2. 在setup函数中执行computed函数，并传入一个函数，在函数中定义计算公式 const 计算属性变量名 = computed(()=>{return 计算返回的结果})
3. 把computed函数调用完的执行结果放到setup的return值对象中
 */
import { ref, computed } from 'vue'
export default {
  setup () {
    const list = ref([1, 2, 3, 4, 5])
    // console.log(list)
    // const aa = ref(0)
    // console.log(aa)
    // const bb = reactive({ nae: 5 })
    // console.log(bb)
    const addData = () => {
      list.value.push(Math.floor(Math.random() * 100 + 1))
    }
    const del = (i) => {
      list.value.splice(i, 1)
    }
    // 计算属性函数 大于3 依赖list的数据计算重新生成新的数据结果有缓存所以快
    const thridNumber = computed(() => {
      return list.value.filter((item) => item > 3)
    })
    // 计算属性 加100
    const s = ref(0)
    const ffn = computed(() => {
      return s.value + 100
    })
    return { list, addData, del, thridNumber, ffn }
  }
}
</script>

<style lang="scss" scoped>
</style>
