import React, { Component } from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({ posts: updatedPosts });
        //console.log(response)
      })
      .catch(error => {
        console.log(error);
        //this.setState({error: true})
      });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link 
            key={post.id}
            to={ '/posts/' + post.id }>
            <Post 
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}></Post>
          </Link>
        )
      });
    };

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;