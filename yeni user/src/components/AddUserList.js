import React, { Component } from 'react'
import { Alert, Table } from 'reactstrap';
import FormComponent from './FormComponent';

class AddUserList extends Component {
  constructor(props){
    super(props);
    this.state={
      visible: false,
      user:{},
    }
  }
  getElementById=(value)=>{
    this.setState({
      user:value
    })

  }
  
  render() {
    return (
      <div>
        {this.props.users.length > 0? ( <Table
            >
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    First Name
                  </th>
                  <th>
                    Last Name
                  </th>
                  <th>
                    Username
                  </th>
                </tr>
              </thead>
              <tbody>
              {this.props.users.map((user)=>
                  <tr key={user.id}>
                  <th scope="row">
                    {user.id}
                  </th>
                  <td>
                    {user.name}
                  </td>
                  <td>
                    {user.surname}
                  </td>
                  <td>
                    {user.age}
                  </td>
                  <td>
                  <button className='btn btn-warning' onClick={()=>this.getElementById(user)}>Edit</button>
                  
                   &nbsp;
                  <button className='btn btn-danger' onClick={()=>this.props.deleteUser(user)}>Delete</button>
                  </td>
                </tr>
              )}
      
              </tbody>
            </Table>):(<Alert color="warning">
            There is no users
          </Alert>)}
          <div className='container'>
          <FormComponent 
          user={this.state.user}
          addUser={this.props.addUser}/>
          </div>
          
      </div>
    )
  }
}
export default  AddUserList;
