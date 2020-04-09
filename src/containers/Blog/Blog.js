import React, { Component } from 'react';

import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {

    
    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

/* <section>
<FullPost id={this.state.selectedPostId} />
</section>
<section>
<NewPost />
</section> */

export default Blog;