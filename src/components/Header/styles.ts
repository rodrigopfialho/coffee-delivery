import styled from "styled-components";

export const Container = styled.header`
  /* width: calc(100vw - 20rem); */
  height: 6.5rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  aside {
    gap: 10px;
    display: flex;
    align-items: center;

    div {
      width: 8.9rem;
      height: 2.375rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: ${(props) => props.theme['purple-light']};
      border-radius: 5px;
      margin: 0 auto;

      svg {
        color: ${(props) => props.theme.purple}
      }

      span {
        font-size: 16px;
        color: ${(props) => props.theme['purple-dark']};
        font-family: Roboto, 'sans-serif'
      }
    }

    button {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 5px;
      background-color: ${(props) => props.theme["yellow-light"]};
      svg {
        color: ${(props) => props.theme["yellow-dark"]}
      }
    }
  }
`;