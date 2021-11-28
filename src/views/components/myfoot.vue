<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>xxx</strong></span>
    <ul>
      <li>
        <a class="selected" href="javascript:;">全部</a>
      </li>
      <li>
        <a class="selected" href="javascript:;">未完成</a>
      </li>
      <li>
        <a class="selected" href="javascript:;">已完成</a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
