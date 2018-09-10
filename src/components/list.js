import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

const List = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default List;