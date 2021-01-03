import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash"># </span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <Avatar src={user.photoUrl} className="siddebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>  
                <h4>{user.email}</h4> 
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <div className="sidebar__statNumber">118</div>
                </div>

                <div className="sidebar__stat">
                    <p>Views on you Post</p>
                    <div className="sidebar__statNumber">860</div>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJS')}
                {recentItem('ReactJS')}
            </div>
        </div>
    )
}

export default Sidebar
