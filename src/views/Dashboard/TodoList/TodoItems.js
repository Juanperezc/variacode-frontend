import React, { Component } from "react";
import {  Table , Button } from "reactstrap";
import Moment from 'react-moment';
class TodoItems extends Component {

  createTasks = item => {
    return (
      <tr key={item.id}>
        <td>
        <Button   onClick={() => this.props.deleteItem(item.id)} type="button" color="primary">
         Borrar
        </Button>
        </td>
        <td>{item.text}</td>
        <td><Moment format="DD/MM/YYYY HH:mm" >{item.created_at}</Moment> </td>
      </tr>
    );
  }

  render() {
    const todoEntries = this.props.entries;
 
    const listItems = todoEntries.map(this.createTasks);
    return (
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Tarea</th>
            <th>Fecha de registro</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </Table>
    );
  }
}
export default TodoItems;
