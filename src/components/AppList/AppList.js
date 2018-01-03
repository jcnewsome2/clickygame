import React, { Component } from 'react';
import './AppList.css';
import '../AppHeader';
import PropTypes from 'prop-types';


function AppList(props) {
  const images = props.images;

  return (
    <ul className="app-list">
      {images.map(image => {

        return (
          <li key={image.id} onClick={(event) => props.selectItem(event, image)}>
            <img src={image.url} alt="" />
          </li>
        );
      })}
    </ul>
  )
}

export default AppList;
