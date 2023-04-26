import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Project = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  :last-child {
    border-bottom: none;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;
export const Info = styled.p`
  font-size: 14px;
  color: #000;
  span {
    font-weight: 500;
  }
`;
