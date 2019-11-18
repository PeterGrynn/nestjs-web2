import React from 'react';
import styled from 'styled-components';

export const Comment = ({author, comment, score}) => {
    return (
        <div>
            Author: {author} | 
            <p>{comment}</p> + {score}
        </div>
    )
}

const Comments = ({length, comments}) => {
    let items = [];
    for(let i = 0; i < length; i++){
        items.push(<Comment key={i} author={comments[i].author} comment={comments[i].comment} score={comments[i].score}/>)
    }

    return (
        <div>
            {items}
        </div>
    )
}

export default Comments;