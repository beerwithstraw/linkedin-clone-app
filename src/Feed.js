import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import WorkIcon from '@material-ui/icons/Work'
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'

import InputOption from './InputOption'
import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={WorkIcon} title="Job" color="#C0CBCD"/>
                    <InputOption Icon={CalenderViewDayIcon} title="Write Article" color="#7FC15E"/>

                </div>
            </div>
            
        </div>
    )
}

export default Feed
