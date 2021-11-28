<template>
  <div>
    <h1>父组件</h1>
    <Child :num="num" :obj="obj" :obj2="obj2" @change-obj="rand"></Child>
    <button @click="num++">更改数字</button>
  </div>
</template>

<script>
import Child from '@/views/components/children.vue'
import { ref, reactive } from 'vue'
export default {
  components: {
    Child
  },
  setup () {
    const num = ref(1)
    const obj = ref({ name: '小海', age: 10 })
    const obj2 = reactive({ name: '小红', age: 11 })
    const rand = (n) => {
      obj2.age += n
    }
    return { num, obj, obj2, rand }
  }
}
</script>

<style lang="scss" scoped>
</style>
