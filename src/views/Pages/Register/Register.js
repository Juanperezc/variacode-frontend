import React, { Component } from 'react';
import { Card, CardBody,  Col, Container, Row } from 'reactstrap';
//Components
import FormRegister from './FormRegister';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import Spinner from '../../Base/Spinner/spinner';
//servicios
import UserService from '../../../services/UserService'
import ConfigStorage from '../../../services/storage/config.store'

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      submit: false,
      rut : '',
      password : '',
      confirm_password : '',
      name: '',
      last_name: '',
      loading : false,
    }

}
validateForm = ()=>{
  if (this.state.rut.length > 0 &&
    this.state.password.length > 0 &&
    this.state.confirm_password.length > 0 &&
    this.state.name.length > 0  &&
    this.state.last_name.length > 0){
      if (this.state.password === this.state.confirm_password){
       return true;
      }else{
        ToastsStore.error("Las contraseñas no coinciden!")
        return false;
      }
    }else{
      ToastsStore.error("Faltan campos por llenar!")
      return false
    }
}

handleOnChangeRut = (event)=>{
  const rut = event.target.value;
  this.setState({ rut })
}

handleOnChangePassword = (event)=>{
const password = event.target.value;
this.setState({ password })
}

handleChangeConfirmPassword = (event)=>{
  const confirm_password = event.target.value;
  this.setState({ confirm_password })
}
handleOnChangeName = (event)=>{
const name = event.target.value;
this.setState({ name })
}
handeOnClickRegister = ()=>{
  this.setState({ submit : true })
  if (this.validateForm()){
    const data = {
      "rut": this.state.rut,
      "password" : this.state.password,
      "name" : this.state.name,
      "last_name" : this.state.last_name
     }
     this.setState({ loading: true })
     UserService.register(data)
      .then(res=> {
        this.setState({ loading: false });
        if (res.status === 422){
          ToastsStore.error(res.data.message)
        }else if (res.status === 200){
          ConfigStorage.setToken(res.data.token);
          ConfigStorage.setUser(res.data.data);
          this.props.history.push('/dashboard');
        }
      },((err) =>{
        console.error('error:', err);
      }))
      .catch(err=>{
        /*   this.toggleModal(); */
      }).finally(()=>{
      })
  }

}
handleOnChangeLastName = (event)=>{
  const last_name = event.target.value;
  this.setState({ last_name })
  }
  render() {
   
      const body = this.state.loading ? 
      <Spinner loading = { this.state.loading } /> :
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                <FormRegister
                  submit = {this.state.submit}
                  rut = { this.state.rut }
                  password = { this.state.password }
                  confirm_password = { this.state.confirm_password }
                  name = { this.state.name }
                  last_name = { this.state.last_name }
                  changeRut = { this.handleOnChangeRut }
                  changePassword= { this.handleOnChangePassword }
                  changeConfirmPassword= { this.handleChangeConfirmPassword }
                  changeName= { this.handleOnChangeName }
                  changeLastName= { this.handleOnChangeLastName }
                  clickRegister= { this.handeOnClickRegister }
                />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ToastsContainer store={ToastsStore}/>
        </Container>
      </div>
        return (
          <div>
             { body }
          </div>
        );
  }
}

export default Register;
