import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ThumbUpAltOutlined, ShareOutlined} from '@material-ui/icons'

import InputOption from './InputOption'
import './Post.css'

const Post = forwardRef(({ name, description, message, photoUrl }, ref)  => {

    return (
        <div ref={ref} className="post ">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
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
})

export default Post
