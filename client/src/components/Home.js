import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

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
        <Link to={`/posts/${item._id}`}>{item.title}</Link>
        <div style={{float:'right'}}>
          <Link to={`/edit/${item._id}`}>修改</Link>
          <Link to={`/`}>删除</Link>
        </div>
      </div>
    ) )
    return(
      <div>
        {postList}
        <Link className='new-post' to='/new' >click</Link>
      </div>
    )
  }
}

export default Home;
