<template>
  <div>
    <h1>vue3代码写在setup函数中</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1
    }
  },
  setup () {
    console.log('setup', this)
    // 没有this因为他是在beforeCreat之前执行的此时组件实例还没创建
    // 只会执行一次
    return {}
  },
  // 组件创建之前===组件实例创建创建之前但是还没数据
  beforeCreate () {
    console.log('beforeCreate', this, this.a)
  },
  // 组件创建之后===》变量初始化已经拿到数据、、这发ajax比mounted要快
  created () {
    console.log('created', this, this.a)
  }

}
</script>

<style lang="scss" scoped>
</style>
