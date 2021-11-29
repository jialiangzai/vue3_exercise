<template>
  <div>
    <h1>模板中ref的使用之子组件</h1>
  </div>
</template>

<script>
export default {
  setup () {
    const fn = () => {
      console.log('我是子组件中的方法')
    }
    return { fn }
  }
}
</script>

<style lang="scss" scoped>
</style>
