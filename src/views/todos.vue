<template>
  <div>
    <section class="todoapp">
      <!-- 头部 -->
      <MyHead />
      <!-- 头部 -->

      <!-- main -->
      <MyList />
      <!-- main -->

      <!-- footer -->
      <!-- <MyFoot /> -->
      <!-- footer -->
    </section>
  </div>
</template>

<script>
import MyHead from './components/myhead.vue'
import MyList from './components/mylist.vue'
// import MyFoot from './components/myfoot.vue'
import '@/styles/base.css'
import '@/styles/index.css'

export default {
  components: {
    MyHead,
    MyList
    // MyFoot
  },
  setup () {
    return {}
  }
}
</script>
