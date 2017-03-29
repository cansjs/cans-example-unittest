import React from 'react'
import cans from 'cans'
import { shallow } from 'enzyme'
import assert from 'power-assert'

import counterModel from '../app/models/counter'
import { Counter } from '../app'

describe('Counter', () => {
  const app = cans()

  app.model(counterModel)

  const wrapped = shallow(<Counter.wrappedComponent models={app.models} />)

  it('should set default count', done => {
    const count = wrapped.find('span').first().text()
    assert(count === '0')
    done()
  })

  it('should increase count', done => {
    app.models.counter.incr()
    const count = wrapped.find('span').first().text()
    assert(count === '1')
    done()
  })

  it('should decrease count', done => {
    app.models.counter.decr()
    app.models.counter.decr()
    const count = wrapped.find('span').first().text()
    assert(count === '-1')
    done()
  })
})