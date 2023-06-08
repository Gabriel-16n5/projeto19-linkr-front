import styled from "styled-components";

export const Main = styled.div`
  background-color: #333333;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
h4{
  color:white;
  font-size:26px;
  font-family: "Oswald", sans-serif;
}
`;

export const TimeLine = styled.div`
  margin-top: 127px;
  width: 42%;
  padding: 0 25px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    color: #ffffff;
    font-weight: 700;
    @media (max-width: 600px) {
      padding-left: 25px;
    }
  }
`;
export const MenuLeft = styled.div`
  margin-top: 212px;
  width: 21%;
  height: 200px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const BackgroundOpacity = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;
`;

export const DeletedContainer = styled.div`
  display: none;
  width: 597px;
  height: 262px;
  background: #333333;
  border-radius: 50px;
  position: fixed;
  top: 30%;
  left: 38%;
  z-index: 12;
  line-height: 41px;
  padding: 120px;
  padding-top: 30px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 34px;
    color: #ffffff;
  }
`;
export const ButtonsContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NoButton = styled.button`
  width: 134px;
  height: 37px;
  font-weight: 700;
  background: #ffffff;
  border-radius: 5px;
  color: #1877f2;
  border: none;
`;

export const YesButton = styled.button`
  width: 134px;
  height: 37px;
  font-weight: 700;
  background: #1877f2;
  border-radius: 5px;
  color: #ffffff;
  border: none;
`;

export const TitleContainer = styled.div`
  width: 156%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const FollowButton = styled.button`
  width: 112px;
  height: 31px;
  background: #1877F2;
  border-radius: 5px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border: none;
  color: white;
`

export const LoadMore = styled.div`
background-color:#1877F2;
width:100%;
height:61px;
margin-bottom:17px;
border-radius:16px;
color:#FFFFFF;
font-family: 'Lato';
display:flex;
align-items:center;
justify-content:center;
p{
  margin-right:10px;
}
`

export const UnfollowButton = styled.button`
  width: 112px;
  height: 31px;
  background: #FFFFFF;
  border-radius: 5px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border: none;
  color: #1877F2;
`

export const FollowUnfollowButton = styled.div`
`

export const LoadButton = styled.button`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  background: #1877F2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color: #FFFFFF;
  position: relative;
  border: none;
`

  export const Loader = styled.div`
  position: absolute;
  right: 35%;
  top: 34%;

`
