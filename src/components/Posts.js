import React from 'react'
import './posts.css'
import Post from './Post'

function Posts({ data }) {
    return (
        <div className='posts'>
            <div className="posts__count">134 Posts</div>
            {
                data.posts.map(post => {
                    return <Post key={post.id} post={post} username={data.username} />
                })
            }
        </div>
    )
}

export default Posts