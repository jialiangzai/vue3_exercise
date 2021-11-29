<template>
  <div>
    <ul>
      <li>父传子{{ num }}</li>
      <li>父传子复杂类型{{ obj }}</li>
      <li>第二个reactive复杂类型{{ obj2 }}</li>
      <li>reactive对象{{ obj2.name }}</li>
      <li @click="change">点击修改父组件的数据</li>
    </ul>
  </div>
  <GrandSon></GrandSon>
</template>

<script>
// import {ref} from 'vue'
import GrandSon from './grandson.vue'
export default {
  components: {
    GrandSon
  },
  // v2的写法
  props: {
    num: {
      type: Number,
      default: 0
    },
    obj: {
      type: Object,
      default: () => ({})
    },
    obj2: {
      type: Object,
      default: () => ({})
    }
  },
  // 声明vue3子传父的事件名
  emits: ['change-obj'],
  setup (props, { emit }) {
    // props为一个对象，内部包含了父组件传递过来的所有prop数据
    // v2获取props就是this. ===》现在在同一作用域下不用this而是通过setup第一个参数props拿
    console.log('vue3中父传子', props.num, props)
    console.log('vue3中父传子', props.obj, props)
    console.log('vue3中父传子', props.obj2.name)
    /**
     * attrs: Proxy
      emit: (event, ...args) => instance.emit(event, ...args)
      expose: exposed => {…}
      slots: Proxy
      * 经过打印发现是一个对象 暴露了一个对象 其中attrs、插槽是proxy对象===》实现代理响应式操作 还有熟悉的emit是一个函数子传父
     */
    console.log('vue3中的第二个参数', emit)
    // v2中子传父通过emit和局部修改(复杂类型，简单类型只能emit)
    const change = () => {
      // Unexpected mutation of "num" prop.山寨版的虽然能改但是eslint会警告，只要不改地址的原则下可以练习但不推荐
      // props.num.value++
      // 正规军 利用setup的第二个参数去子传父emit===>随机加一个数----默认的话还需要声明一下控制台不会警告
      emit('change-obj', Math.floor(Math.random() * 100 + 1))
    }
    return { change }
  }
}
</script>

<style lang="scss" scoped>
</style>
