import { Avatar } from '@material-ui/core'
import React from 'react'

import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <Avatar className="siddebar__avatar"/>
                <h2>Pulkit Agarwal</h2>  
                <h4>agarwalp@tcd.ie</h4> 
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <div className="sidebar__statNumber">1,086</div>
                </div>

                <div className="sidebar__stat">
                    <p>Views on you Post</p>
                    <div className="sidebar__statNumber">860</div>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
