import React, { useEffect, useState } from 'react';
import Card, { cardVariant } from './component/Card';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './component/List';
import UserItem from './component/UserItem';
import TodoItem from './component/TodoItem';
import EventsExample from './component/EventsExample';
import { Post } from './component/Post';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])


  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {

    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }

  }



  async function fetchTodos() {

    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (error) {
      alert(error)
    }

  }

  return (
    <div>
      <Post />
      <Card onClick={(num) => console.log(num)} width='200px' height='200px' variant={cardVariant.primary}>
        <button>Привет</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
      <EventsExample />
  </div>

  )
}

export default App;
