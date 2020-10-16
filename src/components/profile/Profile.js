import React, {useState} from 'react';
import { IconButton, Button } from "@chakra-ui/core";

import './Profile.css';
import image from '../../images/image.png';
import Pill from '../Pill'

const Profile = ({profile}) => {
    const [isFollowing, setFollowing] = useState("Follow");

    return (
        <div className="profile">
            <div className="content">
                <div className="edit">
                    <Button>Edit</Button>
                </div>
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="info">
                    <b>{profile.name}</b>
                </div>
                <div className="dietpills">
                    <div className="pill"><Pill data={profile.diet}/></div>
                </div>
                <div className="info">
                    <b>{profile.city}, FL</b> &nbsp; | &nbsp; <b>{profile.priceRange}</b>
                </div>
                <div className="info">
                    <b>Favorite Restaurants:</b> &nbsp; {profile.places[0]}, {profile.places[1]}
                </div>
                <div className="info">
                    <b>Favorite Foods:</b> &nbsp; {profile.foods[0]}, {profile.foods[1]}
                </div>
                <div className="buttons">
                    <div className="image"><button className="followbutton" onClick={() => setFollowing("Following")}>{isFollowing}</button></div>
                    <IconButton 
                      variantColor="teal"
                      aria-label="Call Segun"
                      size="lg"
                      icon="triangle-down"
                      height={10}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;