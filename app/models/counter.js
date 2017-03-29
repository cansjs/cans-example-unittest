import { observable, action } from 'cans/mobx'

const counterStore = observable({
  count: 0,

  incr: action.bound(function () {
    this.count += 1
  }),

  decr: action.bound(function () {
    this.count -= 1
  })
})

export default {
  namespace: 'counter',
  observable: counterStore
}
