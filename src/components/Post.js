import {Component} from "react";

class Post extends Component{

    render() {
        const {id, title, body} = this.props.post;
        return (
            <div style={{display: 'block', justifyContent: 'center', backgroundColor: 'lightcyan'}}>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
                <hr/>

            </div>
        )
    }

}

export {
    Post
}