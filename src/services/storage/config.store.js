import React from 'react';

export default class ConfigStorage extends React.Component{
  
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static removeToken() {
    localStorage.removeItem('token');
  }
  
  static  getToken() {
    return localStorage.getItem('token');
  }

  static setUser(user) {
    localStorage.setItem('user',  JSON.stringify(user));
  }

  static getUser() {
    return localStorage.getItem('user');
  }

  static removeUser() {
    localStorage.removeItem('user');
  }

  static clearSession(){
    this.removeToken();
    this.removeUser();
  }
}