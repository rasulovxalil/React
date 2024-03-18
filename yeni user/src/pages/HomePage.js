import React, { Component } from 'react'
import AddUserList from '../components/AddUserList';
import { NavbarBrand } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';


 class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            users:
        [{
            id:uuidv4(),
            name:"Xalil",
             surname:"Rasulov",
             age:"19"
        },
        {
            id:uuidv4(),
            name:"Penah",
            surname:"Aliyev",
            age:"19"
        },
        {
            id:uuidv4(),
            name:"Faik",
            surname:"Usubov",
            age:"20"
        }

            ]
        }
    };
    addUser=(name,surname,username)=>{
    if(name,surname,username){
        const users =[...this.state.users];
        users.push({
          id:uuidv4(),
          name:name,
          surname:surname,
          username:username
        });
        this.setState({users});
        }};
    deleteUser=(obj)=>{
        const users=this.state.users.filter((user)=>{
        return user.id!==obj.id;
        })
      this.setState({users})
    }


  render() {
    return (
      <div>
      <NavbarBrand href="/">react intro</NavbarBrand>
        <AddUserList
        users={this.state.users} 
        addUser={this.addUser}
        deleteUser={this.deleteUser}
        />
      </div>
    )
  }
}
export default HomePage;
