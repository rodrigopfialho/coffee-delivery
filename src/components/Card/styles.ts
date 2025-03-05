import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const InfoCoffee = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 0 32px 0 32px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -20px;
  }

`;

export const Tags = styled.span`
  margin: 10px 0 5px 0;
  
  span {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    margin: 5px;
    padding: 6px;
    border-radius: 50px;
    font-size: 0.700rem;
    text-transform: uppercase;
    font-family: Roboto 'sans-serf';
    font-weight: bold;
  }
`;

  export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0 32px 0;
    
    strong {
      font-family: "Baloo 2", serif;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]}
    }

    span {
      font-family: Roboto 'sans-serf';
      font-size: 0.975rem;
      font-weight: normal;
      color: ${(props) => props.theme["base-label"]};
      text-align: center;
      /* line-height: 15px; */
      margin: 8px 1.25rem 0 1.25rem;
    }
  `;

  export const Price = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 0.875rem;
        font-family: Roboto;
        padding-left: 5px;
    }

      span + span{
        color: ${(props) => props.theme["base-text"]};
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: bold;
      } 
    }
    
  `;
  
  export const Actions = styled.div`
    display: flex;

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 78px;
      height: 38px;
      background: ${(props)=> props.theme["base-button"]};
      border-radius: 10px;
      margin-right: 8px;

      button {
        border: 0;
        border-style: none;
        background: ${(props)=> props.theme["base-button"]};
        color: ${(props) => props.theme.purple};
      }
    }

  `;