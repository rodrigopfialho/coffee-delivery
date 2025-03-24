import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  align-items: end;
`;

export const Content = styled.div`
  h3 {
    font-family: "Baloo 2", serif;
    font-size: 3rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    font-family: Roboto sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Info = styled.div`
  height: 18.87rem;
  padding: 30px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;

  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  svg {
    padding: 6px;
    border-radius: 50px;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 22px;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 12px;

      span {
        font-size: 1.2rem;
        font-family: Roboto sans-serif;
        color: ${(props) => props.theme["base-text"]};
      }

      strong {
        font-size: 1.2rem;
        font-family: Roboto sans-serif;
        color: ${(props) => props.theme["base-text"]};
        font-weight: bold;
      }
    }
  }
`;

export const Aside = styled.aside``;
