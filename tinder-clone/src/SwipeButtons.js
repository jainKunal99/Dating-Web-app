import React from 'react'
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon fontSize="large" className="replayButton buttons"/>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize="large" className="closeButton buttons"/>
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize="large" className="starButton buttons"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large" className="favouriteButton buttons"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize="large" className="flashOnButton buttons"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
