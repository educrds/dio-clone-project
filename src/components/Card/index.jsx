import React from "react";
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";
import {FiThumbsUp} from "react-icons/fi"

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://www.conceptseating.com/wp-content/uploads/2021/01/Market-Programming-Banner.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/93599890?v=4"/>
          <div>
            <h4>Pablo Henrique</h4>
            <p>Há 10 minutos.</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito com o curso de HTML e CSS no Bootcamp OrangeTech+...<strong>saiba mais</strong> </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JAVASCRIPT</h4>
          <p>
            <FiThumbsUp /> 10
           </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export {Card}