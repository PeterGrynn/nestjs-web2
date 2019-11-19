import React, { useState } from 'react';
import {
    StyledComment,
    StyledComments,
    Score,
    Plus, 
    Minus,
    StyledTextarea,
    AddComment
} from './styled';
import Axios from 'axios';
import { URL } from '../URL/serverURL';

export const Comment = ({author, comment, score, id}) => {
    
    const handleScore = type => {
        Axios.post( URL.score, {
            type: type,
            id: id
        })
    }

    return (
        <StyledComment>
            Author: <i>{author}</i>
            <Score>
                <Plus onClick={() => handleScore(1)}>+</Plus>
                <Minus onClick={() => handleScore(0)}>-</Minus>
                {score}
            </Score>
            <p>{comment}</p> 
        </StyledComment>
    )
}

export const NewComment = ({pageId}) => {
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('adam');
    const [items, setItems] = useState([]);

    const addComment = () => {
        if(comment){
            Axios.post( URL.createComments, {
                id: pageId,
                author: author,
                comment: comment,
                score: 0
            })
            setItems( items => [...items, <Comment author={author} comment={comment} score={0} id={0} key={items.length}/>]);
            setComment('');
        }
    }

    const handleChange = el => {
        setComment(el.target.value)
    }

    return (
        <StyledComment>
            {items}
            <StyledTextarea value={comment} onChange={handleChange}></StyledTextarea>
            <AddComment onClick={addComment}>
                Add Comment
            </AddComment>
        </StyledComment>
    )
}

const Comments = ({length, comments, pageId}) => {
    let items = [];
    
    for(let i = 0; i < length; i++){
        items.push(<Comment key={i} 
                            author={comments[i].author} 
                            comment={comments[i].comment} 
                            score={comments[i].score}
                            id={comments[i]._id}/>)
    }

    return (
        <StyledComments>
            {items}
            <NewComment pageId={pageId}/>
        </StyledComments>
    )
}

export default Comments;