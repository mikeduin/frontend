import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <div className={"row"}>
          <h2>My Profile</h2>
          <div className={"chip"}>
            <img src="/css/adrienne.png" alt="Adrienne"/>
            Adrienne
          </div>
          <hr />
        </div>
        <div className={"row"}>
          <div className={"col m6"}>
            <div className={"row"}>
              <div className={"col m4 profile-label"}>
                <div> Name </div>
              </div>
              <div className={"col m8 profile-info"}>
                <div> Adrienne </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col m4 profile-label"}>
                <div> Email </div>
              </div>
              <div className={"col m8 profile-info"}>
                <div> AwesomeAdrienne@gmail.com </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col m4 profile-label"}>
                <div> Member Since </div>
              </div>
              <div className={"col m8 profile-info"}>
                <div> June 16, 2016 </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col m4 profile-label"}>
                <div> Hunts Organized </div>
              </div>
              <div className={"col m8 profile-info"}>
                <div> 1 </div>
              </div>
            </div>
          </div>
          <div className={"col m6"}>
            <div className={"row"}>
              <u>Your Upcoming Hunt</u>: <b>"Adrienne's Birthday Scavenger Hunt"</b>
            </div>
            <div className={"row"}>
              <img src="/css/yourmap.png" alt="Adrienne" width="500"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
