import { useState } from "react";

import Pencil from '../../../assets/pencil.svg';

import "./styles.css";

export function Usuario({ profile }) {

  let [ name, setName ] = useState('Catana');
  let [ profileImage, setProfileImage ] = useState('https://catanacomics.files.wordpress.com/2018/04/cropped-icon_1024-1024.png?w=200');

  function handleNameChange () {
    let newName = prompt('Digite seu nome');

    if (newName !== null && newName !== '') {
      setName(newName);
    };    
  }

  function handleImageChange () {
    let newImage = prompt('Digite a URL da sua foto');

    if (checkURL(newImage)) {
      setProfileImage(newImage);
    };
  }

  function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  return (
    <div className="your-profile" data-test="user">
      <img src={profileImage} alt="profile" onClick={handleImageChange} data-test="profile-image"/>
      <div className="your-profile-info">
        <p className="user">{profile}</p>

        <div className="name-icon-container">
          <p className="under-name" data-test="name">{name}</p>
          <img src={Pencil} className='pencil-icon' onClick={handleNameChange} data-test="edit-name"/>
        </div>
      </div>
    </div>
  );
}
