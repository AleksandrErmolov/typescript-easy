import React, { useEffect, useState } from 'react';
import Card, { cardVariant } from './component/Card';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './component/List';
import UserItem from './component/UserItem';
import TodoItem from './component/TodoItem';
import EventsExample from './component/EventsExample';
import { Post } from './component/Post';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import UsersPage from './component/UserPage';
import { TodosPage } from './component/TodosPage';
import UsersItemPage from './component/UsersItemPage';
import TodoItemPage from './component/TodoItemPage';


const App = () => {

  

  return (
   
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='users'> Пользователи </NavLink>
          <NavLink to='todos'> Список дел </NavLink>

        </div>
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UsersItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
        </Routes>

      </div>
    </BrowserRouter>


  )
}

export default App;
