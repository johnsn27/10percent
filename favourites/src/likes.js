import React, { Component} from 'react';
import PropTypes from 'prop-types';
import LeftSideBarButton from './LeftSideBarButtons/LeftSideBarButton.js';
import './likes.css';

class LeftSideBar extends Component {
  render() {
    return (
      <div>
        <div className="my-section">
          <div className="my-section-buttons">
            <div className="button-border">
              <div className="my-section-button">
                <LeftSideBarButton id="account" type="primary" tab-index="1" className="Button" link='' text="My Account">
                </LeftSideBarButton>
              </div>
                <div className="my-section-button">
                  <LeftSideBarButton id="bookings" type="primary" tab-index="1" className="Button" link='' text="My Bookings">
                  </LeftSideBarButton>
                </div>
                <div className="my-section-button">
                  <LeftSideBarButton id="watchedRooms" type="primary" tab-index="1" className="Button" link='/watched-rooms' text="My Watched Rooms">
                  </LeftSideBarButton>
                </div>
              </div>
            </div>
          </div>
        </div >
      );
    }
  }

  export default LeftSideBar;
