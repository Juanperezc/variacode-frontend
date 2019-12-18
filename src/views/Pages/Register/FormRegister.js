import React from "react";
import {
  Button,
  Input,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

/* import { Link } from "react-router-dom"; */
const FormRegister = props => (
  <Form>
    <h1>Registro</h1>
    <p className="text-muted">Crea tu cuenta</p>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
            <i className="fa fa-id-card"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        type="text"
        placeholder="Rut"
        value={props.rut}
        className={ props.rut.length === 0 && props.submit ? 'is-invalid': null}
        onChange={props.changeRut}
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="icon-lock"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        type="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        onChange={props.changePassword}
        className={ props.password.length === 0 && props.submit ? 'is-invalid': null}
        value={props.password}
      />
    </InputGroup>
    <InputGroup className="mb-4">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="icon-lock"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        type="password"
        placeholder="Repetir contraseña"
        autoComplete="current-password"
        onChange={props.changeConfirmPassword}
        className={ props.confirm_password.length === 0 && props.submit ? 'is-invalid': null}
        value={props.confirm_password}
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
            <i className="icon-user"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        type="text"
        placeholder="Nombre"
        value={props.name}
        onChange={props.changeName}
        className={ props.name.length === 0 && props.submit ? 'is-invalid': null}
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
            <i className="icon-user"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        type="text"
        placeholder="apellido"
        value={props.last_name}
        onChange={props.changeLastName}
        className={ props.last_name.length === 0 && props.submit ? 'is-invalid': null}
      />
    </InputGroup>
    <Button onClick={props.clickRegister} color="success" block>
      Create Account
    </Button>
  </Form>
);
export default FormRegister;
