import styled from "styled-components";

export const Main = styled.div`
  background-color:#333333;
  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  `
export const Header = styled.div`
  width:100%;
  height:72px;
  background-color:#151515;
  display:flex;
  font-size:26px;
  color:#FFFFFF;
  align-items:center;
  justify-content:space-between;
  padding-left:26px;
  padding-right:10px;
  position:fixed;
  h1{
    color: #FFFFFF;
    font-size:49px;
    font-weight:700px;
    font-family: 'Passion One', cursive;
   
  }
  img{
    width:53px;
    height:53px;
    border-radius:26px;
    margin-left:12px;
  }
  `
 export const TimeLine = styled.div`
  margin-top:127px;
  width:611px;
  margin-right:25px;
h1{
    font-family: 'Oswald', sans-serif;
    font-size:43px;
    color:#FFFFFF;
    font-weight:700;
    margin-bottom:43px;
}
  `
 export const MenuLeft = styled.div`
  margin-top:212px;
  width:301px;
  height:200px;
  `