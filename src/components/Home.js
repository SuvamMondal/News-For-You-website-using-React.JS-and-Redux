import colorChanger from '../higherordercomponents/colorchanger'
import React, {Component} from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component{

    // state={
    //     posts:[]
    // }

    // componentDidMount(){  //Runs after render function//
    //    axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((input)=>{
    //         // console.log(input);
    //         this.setState({posts:input.data.slice(0,10)});
    //     })
    // }

    render(){
        const {posts} = this.props;
        const output = posts.length ? (
        posts.map((post)=>{
            return (
                <div className='post card' key={post.id}>
                    <div className='card-content'>
                       <Link to={'/posts/' + post.id}> <span className='card-title red-text'>{post.title}</span> </Link>
                        <p>{post.body}...</p>
                    </div>
                </div>
            )}
        )
        ) : (
                 <div className='center'>No posts yet</div>  
            );
        return(
            <div>
              <div className="container">
                <h4 className="center">Home</h4>
                {output}
              </div>
            </div>
          )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(colorChanger(Home));