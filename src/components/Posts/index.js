import { Post } from "./Post";

import "./styles.css";

import meowed from "../../assets/meowed.png";
import barked from "../../assets/barked.png";
import respondeai from "../../assets/respondeai.png";
import badvibesmemes from "../../assets/badvibesmemes.png";
import adorable_animals from "../../assets/adorableanimals.png";

import catPost from "../../assets/gato-telefone.png";
import dogPost from "../../assets/dog.png";
import videoPost from "../../assets/video.mp4";

const posts = [
  {
    name: "meowed",
    profilePicture: meowed,
    content: catPost,
    video: false,
    likedBy: "respondeai",
    likedByPicture: respondeai,
    likesCount: 101523,
  },
  {
    name: "barked",
    profilePicture: barked,
    content: dogPost,
    video: false,
    likedBy: "adorable_animals",
    likedByPicture: adorable_animals,
    likesCount: 99159,
  },
  {
    name: "adorable_animals",
    profilePicture: adorable_animals,
    content: videoPost,
    video: true,
    likedBy: "bad.vibe.memes",
    likedByPicture: badvibesmemes,
    likesCount: 199999,
  },
];

export function Posts () {
  return (
    <div className="post-container">
      {posts.map((item, index) => (
          <Post 
            key={index}
            headerName={item.name}
            headerPicture={item.profilePicture}
            content={item.content}
            isVideo={item.video}
            likedByPicture={item.likedByPicture}
            likedBy={item.likedBy}
            likesCounter={item.likesCount}
          />        
      ))}
    </div>
  );
}
