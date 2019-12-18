import React, { Component } from 'react';

import {

  Row,

} from 'reactstrap';
import TodoList from './TodoList/TodoList';
import TaskService from '../../services/TaskService';
import ConfigStorage from '../../services/storage/config.store';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submit: false,
      items: [],
      currentItem: {text:''},
    };
  }
  deleteItem = key => {
    TaskService.delete(key).then((res) =>{
      const filteredItems = this.state.items.filter(item => {
        return item.id !== key
      })
      this.setState({
        items: filteredItems,
      })
    })
  }
  async componentDidMount(){
    const token = await ConfigStorage.getToken();
    if (token){
      TaskService.index().then((res) =>{
        this.setState({
          items : res.data.data
        })
      })
    }else{
      this.props.history.push('/login')
    }
  
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText }
    this.setState({
      currentItem,
    })
  
  }
  validInput = () => {
    if (this.state.currentItem.text.length > 0){
      return true;
    }else {
      return false;
    }
  }
  addItem = e => {
    e.preventDefault()
    this.setState({
      submit: true
    })
    if (this.validInput()){
      const data = {
        "text": this.state.currentItem.text,
        "status" : "U"
      }
      TaskService.store(data).then((res) =>{
         let items = this.state.items;
        items.push(res.data.data)
         this.setState({
          items
        })
      })
    }
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
        <TodoList
        entries={this.state.items}
        submit={this.state.submit}
        addItem={this.addItem}
        inputElement={this.inputElement}
        handleInput={this.handleInput}
        currentItem={this.state.currentItem}
        deleteItem={this.deleteItem}
        />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
