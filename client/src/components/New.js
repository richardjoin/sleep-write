import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class New extends Component {
  constructor(){
    super();
    this.state={
      work:false
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({work:true})
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    // console.log({title,content});
    const data = {
      title: title,
      content: content
    }
    axios.post('http://localhost:4000/posts', data)
    .then((res) => this.props.router.push('/'))
    // .catch( (error) => console.log(error))
    // 跳转页面方法5种
    // Link
    // HASHHISTORY
    // BROWSERHISTORY
    // THIS.props
    // this.context.router
  }
  render(){
    console.log(this.props);
    return(
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='field'>
            <label className="label">标题</label>
            <input type='text' name="title" ref='title' /><br/>
          </div>
          <div className='field'>
            <label className="label">内容</label>
            <input type='text' name="content" ref='content' /><br/>
          </div>
          <div className='actions'>
            <button type='submit' className='button' key='2' disabled={this.state.work}>save</button>
            <Link to='/' className='cancel'>no</Link>
          </div>
        </form>
      </div>
    )
  }
}

New.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default New;
