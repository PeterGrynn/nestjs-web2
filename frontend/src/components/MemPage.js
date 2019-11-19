import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { createBrowserHistory } from "history";
import { URL } from '../URL/serverURL';
import Comments from './Comments';

const MemPage = () => {
    const [pageId, setPageId] = useState(createBrowserHistory().location.pathname.slice(5));
    const [comments, setComments] = useState('');

    useEffect(() => {

        getComment(pageId, URL.comments);
    }, [])

    const getComment = async (id, url) => {
        if(id){
            const { data } = await Axios.get(`${url}${id}`)
            setComments(data);
        }    
    }

    return (
        <div>
            <div>header</div>
            <div>Mem</div>
            <div>
                <Comments length={comments.length} comments={comments} pageId={pageId}/>
            </div>
        </div>
    )
}

export default MemPage;