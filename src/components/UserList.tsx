import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[]
}

const UserList:FC<UserListProps> = ({users}) => {
    return (
        <div>
            {
                users.map((i)=>
                    <div key={i.id} style={{padding: '15px', border: '1px solid gray'}}>
                        {i.id}. {i.name} lives at the adress {i.address.city} in street {i.address.street}
                    </div>
                )
            }
        </div>
    );
};

export default UserList;