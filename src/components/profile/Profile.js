import React from 'react';
import { IconButton, Button } from "@chakra-ui/core";

import './Profile.css';
import image from '../../images/image.png';
import Pill from '../Pill'

const Profile = (props) => {

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
                    <b>Anna Lanzino</b>
                </div>
                <div className="dietpills">
                    <div className="pill"><Pill data="vegan"/></div>
                </div>
                <div className="foodpills">
                    <div className="pill"><Pill data="Cuban"/></div>
                    <div className="pill"><Pill data="Indian"/></div>
                </div>
                <div className="info">
                    <b>Gainesville, FL</b> &nbsp; | &nbsp; <b>$$</b>
                </div>
                <div className="info">
                    <b>Favorite Restaurants:</b> &nbsp; Karma Cream, Kabab House
                </div>
                <div className="buttons">
                    <button className="followbutton">Follow</button>
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