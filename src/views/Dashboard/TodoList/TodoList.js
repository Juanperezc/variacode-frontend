import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import TodoItems from "./TodoItems";

class TodoList extends Component {

  deleteItem = key => {
    this.props.deleteItem(key); 
  }

  render() {
    return (
      <Card className="p-4">
        <CardBody>
          <Form onSubmit={this.props.addItem}>
            <InputGroup>
              <Input
                type="text"
                id="input2-group2"
                name="input2-group2"
                placeholder="Escribe una tarea"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
                className={ this.props.currentItem.text.length === 0 && this.props.submit ? 'is-invalid': null}
              />
              <InputGroupAddon addonType="append">
                <Button type="submit" color="primary">
                  Guardar
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
            <TodoItems entries={this.props.entries} deleteItem={this.deleteItem} />
        </CardBody>
      </Card>
    );
  }
}
export default TodoList;
