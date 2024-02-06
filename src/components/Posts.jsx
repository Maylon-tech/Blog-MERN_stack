import React, { useState } from 'react'
import PostItem from '../components/PostItem'

import Thumbnail1 from '../assets/logo.jpg' 
import Thumbnail2 from '../assets/logo.jpg' 
import Thumbnail3 from '../assets/logo.jpg' 
import Thumbnail4 from '../assets/logo.jpg' 

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very fusrt post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut incidunt doloribus, vero voluptatem necessitatibus perspiciatis dolorum natus fugiat tempore fugit dolores!',
        authorID: 3,
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very fusrt post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut incidunt doloribus, vero voluptatem necessitatibus perspiciatis dolorum natus fugiat tempore fugit dolores!',
        authorID: 1,
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very fusrt post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut incidunt doloribus, vero voluptatem necessitatibus perspiciatis dolorum natus fugiat tempore fugit dolores!',
        authorID: 7,
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very fusrt post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut incidunt doloribus, vero voluptatem necessitatibus perspiciatis dolorum natus fugiat tempore fugit dolores!',
        authorID: 11,
    },

]


const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)


  return (
    <section className='posts'>
        <div className="posts_container">
            {
                posts.map(({
                    id, thumbnail, category, title, desc, authorID
                }) => (
                    <PostItem 
                        key={id}
                        thumbnail={thumbnail}
                        category={category}
                        title={title}
                        desc={desc}
                        authorID={authorID}
                    />
                ) )
            }
        </div>
    </section>
  )
}

export default Posts