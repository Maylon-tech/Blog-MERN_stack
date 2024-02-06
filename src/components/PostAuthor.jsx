import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sertg`}>
        <div className="post_author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post_author-detail">
            <h5>By: Ernest Achiever</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor