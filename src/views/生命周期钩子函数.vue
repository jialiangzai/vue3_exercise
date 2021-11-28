<template>
  <div>
    <h1>生命周期钩子函数</h1>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onUpdated, onBeforeUpdate, onUnmounted, onBeforeUnmount } from 'vue'
export default {
  setup () {
    // 注意v3的生命周期钩子函数写在setup中有6个且优先与vue2的生命周期钩子
    // v2写在setup外部
    console.log('v3生命周期setup')
    onMounted(() => {
      console.log('当前的生命周期钩子函数onMounted')
    })
    onBeforeMount(() => {
      console.log('当前的生命周期钩子函数onBeforeMount')
    })
    onUpdated(() => {
      console.log('当前的生命周期钩子函数onUpdated')
    })
    onBeforeUpdate(() => {
      console.log('当前的生命周期钩子函数onBeforeUpdate')
    })
    onUnmounted(() => {
      console.log('当前的生命周期钩子函数onUnmounted')
    })
    onBeforeUnmount(() => {
      console.log('当前的生命周期钩子函数onBeforeUnmount')
    })
    return {}
  },
  beforeCreate () {
    console.log('vue2的生命周期函数beforeCreate')
  },
  created () {
    console.log('vue2的生命周期函数created')
  }
}
</script>

<style lang="scss" scoped>
</style>
