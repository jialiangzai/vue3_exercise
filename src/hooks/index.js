import { ref, computed } from 'vue'

// 抽离的可复用逻辑一般以use开头===》约定
const useList = () => {
  // 因为没接口手写模拟数据
  const todoList = ref([{ id: 0, name: '吃饭', isOk: false }, { id: 1, name: '睡觉', isOk: false }])
  // 数据绑定获取输入的内容
  const newTodo = ref('')
  // 全部完成/未完成
  // const isOkAll = ref(false)
  const delTodo = i => {
    todoList.value.splice(i, 1)
  }
  // 新增
  const addTodo = () => {
    // 排除空回车
    // if (newTodo.value === '') return
    if (!newTodo.value.trim()) return
    todoList.value.unshift({

      id: Date.now(),
      name: newTodo.value,
      isOk: false
    })
    // 清空输入框
    newTodo.value = ''
  }
  return {
    todoList,
    newTodo,
    delTodo,
    addTodo
  }
}
// 传递参数实现
const useChange = (todoList) => {
  // const todoList = ref([{ id: 0, name: '吃饭', isOk: false }, { id: 1, name: '睡觉', isOk: false }])
  const changeOkAll = computed({
    get () {
      return todoList.value.every(item => item.isOk)
    },
    set (v) {
      // set设置改变全选/未全选
      return todoList.value.forEach(io => {
        io.isOk = v
      })
    }
  })
  // 剩余未完成的个数===>获取
  const surp = computed(() => {
    // 过滤isok 此处简写了过滤留下为false
    return todoList.value.filter(item => !item.isOk).length
  })
  return { changeOkAll, surp }
}
export {
  useList,
  useChange
}
