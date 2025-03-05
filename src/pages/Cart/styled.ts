import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const ContentAddress = styled.div`

`;

export const Address = styled.div`
  width: 40rem;
  height: 23.25rem;
  display: flex;
  flex-direction: column;
  

  div h3 {
    font-family: "Baloo 2", serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme['base-subtitle']}
  }

  form {
    background-color: ${props => props.theme['base-card']};
    padding: 40px;

    #details {
      display: flex;
      align-items: center;
      /* padding-right: 32px; */

      span {
        font-family: Roboto 'sans-serif';
        text-align: center;
        font-size: 0.975rem;
        color: ${props => props.theme['base-subtitle']}
      }
    }
      #informe {
        font-family: Roboto 'sans-serif';
        font-size: 1rem;
        margin-left: 32px;
        color: ${props => props.theme['base-text']}
      }

      div#ruaecep {
        margin-top: 32px;

        
      }
  }
`;
export const PaymentMethod = styled.div``;