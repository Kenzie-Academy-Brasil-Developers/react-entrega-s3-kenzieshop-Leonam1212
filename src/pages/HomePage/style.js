import styled from "styled-components";

export const Header = styled.div`
  margin-left: 30px;
  margin-bottom: 25px;
  font-size: 2rem;
  font-weight: 300;

  p {
    span{
      font-weight: bold;
    }
  }

  
`
export const Container = styled.section`

  width: 1200px;
  padding: 10px;
  margin: 200px auto;
  border-radius: 5px;
  background: rgba(255, 255, 255,0.12);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 2.45);
`
export const Content = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;


  section {
    width: 360px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-align: left;

    margin: 15px;
    :hover {
      transform: translateY(-5px);
      transition: 0.5s;
    }
    div {
      display: flex;
    
      width: 95%;
      margin: 10px auto;
      justify-content: space-between;
      font-weight: bold;
    }
    p {
      width: 100%;
      margin-top: -1px;
      margin-bottom: 10px;
      margin-left:5px;
    }
    img {
      border-radius: 8px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.45);
      width: 100%;
      height: 300px;
    }
  }

  button {
    /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.45); */
    border: none;
    padding: 5px;
    border-radius: 8px;

  }
  button:hover{
    opacity: 0.7;
  }
`;
