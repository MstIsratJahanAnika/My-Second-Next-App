// convert to client side
'use client';

import { use } from 'react';

const Posts = ({postPromise}) => {

    const posts = use(postPromise);
    console.log('posts in posts components: ', posts);

    return (
        <div>
            <h2 className="text-3xl">Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;