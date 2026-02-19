import React, { useState } from "react";
import Buttons from "./Buttons";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import LikeCount from "./LikeCount";

function Card() {
     const [count, setcount] = useState(0)

  const increase = () =>{
    setcount(count + 1)
  }

  const decrease = () =>{
      if(count === 0 ){
          setcount(0)
        }else{
        setcount(count - 1)

    }
  }
  return (
    <div className="border bg-blue-300 w-fit p-10 rounded-2xl flex flex-col items-center gap-2">
         
      <ProfileImage />
     <UserInfo name="Hero" bio="Hey! this is Coder"/>
      <h5 className="flex"><LikeCount /> : {count}</h5>
      <Buttons increase={increase} decrease={decrease}/>
    </div>
  );
}

export default Card;
