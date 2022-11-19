import { useState } from "react";

import bookmark from '../../../assets/bookmark.svg';
import bookmarkFilled from '../../../assets/bookmark-filled.svg';
import heart from '../../../assets/heart.png';
import heartLike from '../../../assets/heart-like.svg';
import heartLikeFilled from '../../../assets/heart-like-filled.svg';
import chatBubble from '../../../assets/chatbubble-outline.svg';
import paperPlane from '../../../assets/paper-plane-outline.svg';

import "./styles.css";

export function Post({
  headerName,
  headerPicture,
  content,
  isVideo,
  likedByPicture,
  likedBy,
  likesCounter,
}) {
  let [saved, setSaved] = useState(false);
  let [liked, setLiked] = useState(false);
  let [doubleClicked, setDoubleClicked] = useState(false);
  let [likesNumber, setLikesNumber] = useState(likesCounter);
  let [you, setYou] = useState(likedBy);

  function handleLikeClick() {
    setLiked(!liked);
    if (you === likedBy) {
      setYou("você");
      setLikesNumber(+likesNumber + 1);
    } else {
      setYou(likedBy);
      setLikesNumber(+likesNumber - 1);
    }
    if (doubleClicked === true) {
      setDoubleClicked(false);
    }
  }

  function handleDoubleClickLike () {    
    if(liked === false) {
      setLiked(!liked);
      setYou('você');
      setLikesNumber(+likesNumber + 1);
      setDoubleClicked(!doubleClicked);
    }          
  }

  return (
    <div className="post" data-test="post">
      <div className="post-header">
        <div className="profile-info">
          <img src={headerPicture} alt="post" />
          <p>{headerName}</p>
        </div>
        <p className="more-info">...</p>
      </div>

      <div className="post-content">
        {
          doubleClicked &&
          <img className='heart-like-image' src={heart} alt='heart'/>          
        }

        {isVideo ? (
          <video muted  autoPlay={true}  onDoubleClick={handleDoubleClickLike} data-test="post-image">
            <source src={content} type="video/mp4" />
          </video>
        ) : (
          <img src={content} alt="content" onDoubleClick={handleDoubleClickLike} data-test="post-image"/>
        )}
      </div>

      <div className="post-footer">
        <div className="post-footer-icons-container">
          <div>
            {liked ? (
              <img src={heartLikeFilled}
                className="footer-icon"
                onClick={handleLikeClick}
                alt='heart-filled'
                data-test="like-post"
              />
            ) : (
              <img src={heartLike}
                className="footer-icon"
                alt="heart"
                onClick={handleLikeClick}
                data-test="like-post"
              />
            )}
            <img src={chatBubble} className="footer-icon" />
            <img src={paperPlane} className="footer-icon" />
          </div>
          {saved ? (
            <img src={bookmarkFilled}
              className="footer-icon"              
              onClick={() => setSaved(!saved)}
              alt='bookmark filled'
              data-test="save-post"
            />
          ) : (
            <img src={bookmark}
              className="footer-icon"
              onClick={() => setSaved(!saved)}
              alt='bookmark'
              data-test="save-post"
            />
          )}
        </div>

        <div className="likes-container">
          <img src={likedByPicture} alt="profile" />
          <p className="post-footer-text">
            Curtido por <span>{you}</span> e{" "}
            <span data-test="likes-number">outras {likesNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} pessoas</span>
          </p>
        </div>
      </div>
    </div>
  );
}
