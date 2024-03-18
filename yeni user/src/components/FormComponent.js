import React, { Component } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';

export default class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state={
        id:null,
        name:"",
        surname:"",
        username:"",
        }
    }
 
    onSubmit=()=>{
        this.props.addUser(
            this.state.name,
            this.state.surname,
            this.state.username
        )

    }
    componentDidMount=()=>{
      this.setState({
        id:this.props.id,
        name:this.props.name,
        surname:this.props.surname,
        username:this.props.username
      })

    }
  render() {
 
    return (
      <div>
      <Form> 
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          value={this.state.name}
          onChange={(e)=>this.setState({name:e.target.value})}
          id={uuidv4()}
          name="name"
          placeholder="Isim giriniz"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        
        
        <Label for="surname">
          Surname
        </Label>
        <Input
          value={this.state.surname}

          onChange={(e)=>this.setState({surname:e.target.value})}
          id={uuidv4()}
          name="surname"
          placeholder="Soyisim giriniz"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="username">
          Useername
        </Label>
        <Input
          value={this.state.username}

          onChange={(e)=>this.setState({username:e.target.value})}
          id={uuidv4()}
          name="username"
          placeholder="kullanici adi  giriniz"
          type="text"
        />
      </FormGroup>
      </Form>
      <button className='btn btn-success' onClick={()=>this.onSubmit()}>add</button>
      <button className='btn btn-danger'>cancel</button>
      </div>
    )
  }
}

