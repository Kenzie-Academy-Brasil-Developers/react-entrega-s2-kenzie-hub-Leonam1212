import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding: 20px;
  margin: 2rem auto;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  font-size: 20px;

  figure {
    margin-top: -55px;
    width: 100px;
    img {
      width: 100%;
      border-radius: 100%;
      border: 2px solid var(--whiteCity);
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
    }
  }
  div {
    display: flex;
    margin: 1rem auto;
    text-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    align-items: center;
    color: var(--whiteCity);
    width: 100%;
    p {
      font-size: 40px;
      font-weight: bold;
    }
    span {
      color: var(--whiteCity);
      font-weight: bold;
      font-size: 13px;
    }
  }
  button {
    margin-top: 40px;
    align-self: flex-end;
    background: var(--whiteCity);
    color: var(--EletromagneticColor);
  }
  svg {
    font-size: 1.1rem;

    margin-right: 4px;
    transform: translateY(2px);
  }
`;
