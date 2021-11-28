<template>
  <header class="header">
    <h1>todos</h1>
    <label for="toggle-all"></label>
    <input type="checkbox" id="toggle-all" class="toggle-all" />
    <input
      type="text"
      placeholder="输入任务名称-回车确认"
      autofocus
      class="new-todo"
    />
  </header>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>
