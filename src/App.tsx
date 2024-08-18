//import, żeby się dało rerenderować widok on the fly
import React, { useState } from 'react'
import './App.css'
import { TodoTable } from './components/TodoTable'
import { NewTodoForm } from './components/NewTodoForm'

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false)

  //konwencja tworzenia useState: const [nazwaObiektu, setNazwaObiektu] = useState(obiekt)
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: 'Water plants',
      rowAssigned: 'User two',
    },
    {
      rowNumber: 2,
      rowDescription: 'Make dinner',
      rowAssigned: 'User one',
    },
    {
      rowNumber: 3,
      rowDescription: 'Charge phone',
      rowAssigned: 'User two',
    },
    {
      rowNumber: 4,
      rowDescription: 'Feed puppy',
      rowAssigned: 'User one',
    },
  ])

  //metoda addTodo wywoływana z onClick tworzy nowe todo na sztywno,
  //a następnie odświeża listę dodając nowe todo do useState, jakoś tak
  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1
    } else {
      rowNumber = 1
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    }
    //używamy setTodos, a jako argument przekazujemy nową listę
    //...todos - utworzenie nowej listy z istniejącej listy
    //newTodo - przekazanie nowego obiektu do listy
    setTodos((todos) => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    })
    setTodos(filtered)
  }

  // <NewTodoForm addTodo={addTodo} /> - przekazujemy metodę jako 'prop' do NewTodoForm
  // {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>} - renderowanie warunkowe (jeżeli showAddTodoForm, wtedy renderujemy to, co jest po &&)
  // {showAddTodoForm ? 'Close New Todo' : 'New Todo'} - turnary operator, jeśli showAddTodoForm == true, to wypisuje pierwsze, jak nie, to drugie (jak w Javie)
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>
    </div>
  )
}
