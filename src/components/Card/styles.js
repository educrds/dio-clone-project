import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
`;
const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fefefe;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #fefefe;
  }
`;

const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #fefefe;
`;
const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fefefe;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

const HasInfo = styled.div`
  margin-top: 12px;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #fefefe80;
  }
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
`;

export {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
};
