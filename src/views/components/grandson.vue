<template>
  <div>
    <h1>依赖注入provid和inject之孙子组件</h1>
    <p>{{ grandson }}</p>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    const grandson = inject('nums')
    console.log('祖先传递的数据使用依赖注入我是注入(还是响应式的呦)', grandson, grandson.value)
    return { grandson }
  }
}
</script>

<style lang="scss" scoped>
</style>
