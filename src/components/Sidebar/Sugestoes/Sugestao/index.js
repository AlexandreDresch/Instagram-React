import "./styles.css";

export function Sugestao({ name, photo, information }) {
  return (
    <div className="sugestion-right">
      <div className="profile-sugestion">
        <img src={photo} alt="profile" />

        <div className="sugestion-info">
          <a href="#" className="username">
            {name}
          </a>
          <p>{information}</p>
        </div>
      </div>
      <a href="#" className="follow">
        Seguir
      </a>
    </div>
  );
}
