import React, {useState} from 'react';
import { IconButton, Button } from "@chakra-ui/core";

import './Profile.css';
import image from '../../images/image.png';
import Pill from '../Pill'

const Profile = ({profile, setDropdownIndex}) => {
    const [isFollowing, setFollowing] = useState("Follow");
    const [icon, setIcon] = useState("triangle-down");
    const [showSimilarProfiles, setShowSimilarProfiles] = useState(false);

    const dropdown = () => {
        icon === "triangle-down" ? setIcon("triangle-up") : setIcon("triangle-down");
        setShowSimilarProfiles(!showSimilarProfiles);
        showSimilarProfiles ? setDropdownIndex(-1) : setDropdownIndex(profile.index);
    }

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
                    <span className="name"><b>{profile.name}</b></span>
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
                      icon={icon}
                      height={10}
                      onClick={dropdown}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;