import styled from "styled-components";

export const Container = styled.section`
  div:first-child {
    display: flex;

    text-align: center;
    li:first-child {
      font-size: 30px;
      svg {
        color: white;
      }
    }
  }
  li {
    font-size: 32px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  }
  span {
    color: #74b9ff;
  }
`;
export const InputContainer = styled.form`
  flex: 1;
  margin-top: 100px;
  padding: 0 38px;
  section {
    display: flex;
    flex-wrap: wrap;
    > div {
      max-width: 80%;
      flex: 1;
      margin-right: 16px;

      input {
        width: 10px;
      }
    }
    button {
      max-width: 260px;
      height: 60px;
      margin: 0;
    }
  }
`;

export const CardsContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  div {
    margin-top: 16px;
  }
`;
