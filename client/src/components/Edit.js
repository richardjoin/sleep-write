import React, { Component } from 'react';
import { Link } from 'react-router'
import axios from 'axios'

class Edit extends Component {
  constructor(){
    super();
    this.state={
      work:false,
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
  handleSubmit(e){
    e.preventDefault();
    this.setState({work:true})
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    console.log(title,content);
    axios.put(`http://localhost:4000/posts/${this.props.params._id}`,{title,content})
    .then( res=> this.props.router.push('/'))
    .catch( err => console.log(err))
  }
  bandleChange(e){
    this.setState({title:e.target.value})
  }
  bandleChange1(e){
    this.setState({content:e.target.value})
  }
  render(){
    console.log(this.state);
    return(
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='field'>
            <label className="label">标题</label>
            <input type='text' name="title" ref='title'
            value={this.state.title}
            onChange={this.bandleChange.bind(this)} /><br/>
          </div>
          <div className='field'>
            <label className="label">内容</label>
            <input type='text' name="content" ref='content'
            value={this.state.content}
            onChange={this.bandleChange1.bind(this)} /><br/>
          </div>
          <div className='actions'>
            <button type='submit' className='button' key='2'
            disabled={this.state.work}>更新</button>
            <Link to='/' className='cancel'>no</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;
