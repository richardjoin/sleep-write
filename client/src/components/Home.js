import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:4000/posts')
    .then( res => this.setState({data:res.data.posts}))
  }
  render(){
    let postList= this.state.data.map( (item,i) => (
      <div key={i} className='post-card'>
        <h3>{item.title}</h3>
      </div>
    ) )
    return(
      <div>
        {postList}
      </div>
    )
  }
}

export default Home;
