import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 5.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const Heading = styled.div`
  width: 36.75rem;
  margin-bottom: 66px;
  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    margin-bottom: 16px;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }
`;

export const Info = styled.div`
  width: 36.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  svg {
    padding: 6px;
    border-radius: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 152px;
`;

export const CoffeeList = styled.main`
margin-top: 54px;
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 26px;

`;