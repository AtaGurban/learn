import axios from "axios";
import React, { useState, useEffect } from "react";
import Card, { CardVariants } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    } catch (error) {
      
    }    
  }
  
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        width="100px"
        height="100px"
        variant={CardVariants.outline}
      >
        <button>Button</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
};

export default App;
