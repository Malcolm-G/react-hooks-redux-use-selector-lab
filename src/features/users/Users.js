import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state => {
    console.log(state)
    return state.users
  })
  const userCount = useSelector(state=>state.users.length)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */
          users?.map((user,index)=>{
            return(
              <li key={`user-${index}`}>
                {user.username}
              </li>
            )
          })
        }
        {/* In addition, display the total number of users curently in the store */}
      </ul>
      <p>Total Users: {userCount}</p>
    </div>
  );
}

export default Users;
