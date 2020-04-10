import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

    
    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to={{
                                pathname: '/new-post'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
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