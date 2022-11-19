import StoriesBorder from "../../../assets/stories_background.png";

import "./styles.css";

export function Story({ image, name }) {
  return (
    <div className="stories">
      <div className="story">
        <img className="profile-image" src={image} alt="profile" />
        <img className="profile-border" src={StoriesBorder} alt="border" />
      </div>
      <p className="profile-name">{name}</p>
    </div>
  );
}
