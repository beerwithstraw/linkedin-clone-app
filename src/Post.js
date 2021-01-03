import React from 'react'
import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ThumbUpAltOutlined, ShareOutlined} from '@material-ui/icons'

import InputOption from './InputOption'
import './Post.css'

function Post({ name, description, message, photoUrl }) {

    return (
        <div className="post ">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <h4>{description}</h4>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>    
            </div>      
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like"/>
                <InputOption Icon={ChatOutlined} title="Comment"/>
                <InputOption Icon={ShareOutlined} title="Share"/>
                <InputOption Icon={SendOutlined} title="Send"/>

            </div>      
        </div>
    )
}

export default Post
