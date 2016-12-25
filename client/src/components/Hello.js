import React, { Component } from 'react';
import axios from 'axios';
class Hello extends Component {
  constructor(){
    super();
    this.state = {
      title:'',
      content:''
    }
  }
  componentWillMount(){
    axios.get(`http://localhost:4000/posts/${this.props.params._id}`)
    .then( (res => {
      this.setState({
        title:res.data.post.title,
        content:res.data.post.content
      })
    }) )
  }
  render(){
    return(
      <div>
        <div>{this.state.title}</div>
        <p>{this.state.content}</p>
      </div>
    )
  }
}

export default Hello;
