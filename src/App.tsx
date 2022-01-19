import React from 'react';
import Card, { cardVariant } from './component/Card';
import UserList from './component/UserList';
import { IUser } from './types/types';

const App = () => {
  
  const users: IUser[] = [
    { id: 1, name: "Alex", email: "123@mail.ru", address:{city:"Moscow", street:"Lenina"} }
]

  return <div>
    <Card onClick={(num) => console.log(num)} width='200px' height='200px' variant={cardVariant.primary}>
      <button>Привет</button>
    </Card>
    <UserList users={users}/>
  </div>;
}

export default App;
