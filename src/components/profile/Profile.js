import React from 'react';

import './Profile.css';
import image from '../../images/image.png';
import Pill from '../Pill'

const Profile = (props) => {


    return (
        <div className="profile">
            <div className="upper">
                <div className="edit">
                    <button type="button">Edit</button>
                </div>
                <div className="image">
                    <img src={image} height={200}/>
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
            </div>

        </div>
    )
}

export default Profile;