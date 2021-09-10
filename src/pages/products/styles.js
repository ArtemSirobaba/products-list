import styled from "styled-components";

export const PageWrapper = styled.div`
  .dropdown {
    padding-left:  15%;
  }
  button {
    display: inline-block;
    min-width: 80px;
    padding: 7px 11px;
    background-color: #3c516a;
    color: #ffffff;
    font-size: 13px;
    line-height: 18px;
    cursor: pointer;
    text-decoration: none;

    outline: none;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 3px;
    border-color: #3c516a;
    border: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 300px;
  height: 400px;

  h1 {
    font-size: 20px;
    color: red;
  }
  p {
    font-size: 15px;
    color: green;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;
