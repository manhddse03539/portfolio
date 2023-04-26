import styled from "styled-components";

export const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Tabs = styled.div`
  display: flex;
  button {
    border-bottom: 1px solid #ccc;
    color: #888888;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0 ease-out;
  }
  button:disabled {
    border-bottom: 3px solid #3399ff;
    color: #000;
  }
`;
export const Title = styled.p`
  color: black;
  font-size: medium;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;
export const Content = styled.div`
  padding: 30px;
  background-color: white;
  font-size: 16px;
`;
