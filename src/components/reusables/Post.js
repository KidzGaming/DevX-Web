import React, { Component } from 'react';
import './css/Post.css'

export default class Post extends Component {
  render(){
    const { author, username, text, likesCount, commentsCount } = this.props;
    return (
      <div className="post">
        <p className="post-author">{author}</p>
        <p className="post-author-username">@{username}</p>
        <p className="post-text">{text}</p>
        <p className="post-likes">Likes: {likesCount}</p>
        <p className="post-comments">Comments: {commentsCount}</p>
      </div>
    );
  }
}