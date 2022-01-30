import React from 'react';
import { IUser } from '../types/types';


interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;

}

const UserItem: React.FC<UserItemProps> = ({ user, onClick}) => {
    return (

        <div
            style={{ padding: 15, border: '1px solid gray' }}
            onClick={() => onClick(user)} >
            {user.id}. {user.name} Проживает городе {user.address.city} на улице {user.address.street}
        </div>
    )
}


export default UserItem;
