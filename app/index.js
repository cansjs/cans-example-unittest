import React from 'react'
import cans, { inject } from 'cans'
import { observable } from 'cans/mobx'
import { BrowserRouter, Route } from 'cans/router'

import counterModel from './models/counter'

const app = cans()

app.model(counterModel)

export const Counter = inject(({ models }) => {
  return (
    <div>
      <span>{models.counter.count}</span>
      <button onClick={models.counter.incr}>+</button>
      <button onClick={models.counter.decr}>-</button>      
    </div>
  )
})

app.route(() => (
  <BrowserRouter>
    <Route path='/' component={Counter} />
  </BrowserRouter>
))

app.start(document.querySelector('#app'))
