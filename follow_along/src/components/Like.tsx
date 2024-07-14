import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Like = () => {
  const size = 100;
  let [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? <FaHeart size={size} style={{ color: "red" }} /> : <FaRegHeart size={size} />}
    </div>
  );
};
