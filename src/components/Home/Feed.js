import React, { Component } from 'react';
import axios from 'axios';
import { Post } from '../reusables';

export default class Feed extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get(`http://localhost:3500/posts`)
      .then(res => {
        const posts = res.data.posts;
        this.setState({ posts });
      })
  }
  render(){
    const { posts } = this.state;
    return (
      <div>
        { posts.map(post =>
          <div key={post._id}>
            <Post 
              author={post.author.name}
              username={post.author.username}
              text={post.text} 
              likesCount={post.likes.length} 
              commentsCount={post.comments.length} 
            />
          </div>
        ) }
      </div>
    )
  }
}