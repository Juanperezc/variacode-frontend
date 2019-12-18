import React, { Component } from 'react';
import { CardGroup, Col,  Container, Row } from 'reactstrap';
import {ToastsContainer, ToastsStore} from 'react-toasts';
//Components
import FormLogin from './FormLogin';
/* import SignUp from './SignUp'; */
import Spinner from '../../Base/Spinner/spinner';

//servicios
import UserService from '../../../services/UserService'
import ConfigStorage from '../../../services/storage/config.store'

class Login extends Component {

  constructor(props){
      super(props);

      this.state = {
        rut : '',
        password : '',
        modal: false,
        loading : false,
        submit: false,
      }

  }
  componentDidMount(){

  }
  handleOnChangeRut = (event)=>{
      const rut = event.target.value;
      this.setState({ rut })
  }
  handleOnChangePass = (event)=>{
    const password = event.target.value;
    this.setState({ password })
  }

  handeOnClickLogin = ()=>{
    this.setState({submit: true})
    const cond = this.state.rut.trim().length > 0 && this.state.password.trim().length > 0;
    if(cond){
       const data = {
        "rut": this.state.rut,
        "password" : this.state.password
       }
       this.setState({ loading: true })
       UserService.login(data)
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
    }else{
      ToastsStore.error("Faltan campos por llenar!")
    }
  }

  toggleModal = ()=>{
    this.setState({ modal: !this.state.modal })
  }


  render() {
    const body = this.state.loading ? 
      <Spinner loading = { this.state.loading } /> :
       <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <FormLogin 
                submit = {this.state.submit}
                  rut = { this.state.rut }
                  changeRut = { this.handleOnChangeRut }
                  pass = { this.state.password }
                  changePass= { this.handleOnChangePass }
                  clickLogin= { this.handeOnClickLogin }
                />
              </CardGroup>
            </Col>
          </Row>
          <ToastsContainer store={ToastsStore}/>
        </Container>

    return (
      <div className="app flex-row align-items-center">
         { body }
      </div>
    );
  }
}

export default Login;