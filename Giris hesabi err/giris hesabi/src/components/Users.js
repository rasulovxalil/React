import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../Context';
class  Users extends Component {
  render() {

    return (
      <UserConsumer>
      {
        value => {
            const {users} = value;
            return (
            <div>
              {
                  users.map(user => {
                      return (
                          <User
                              name = {user.name}
                              department = {user.department}
                              salary = {user.salary}
                              key = {user.id}
                              id = {user.id}

                          /> 
                      )
                  })
              }
            </div>
          )
              }
            }
            </UserConsumer>
          )
  }
}
export default Users;
