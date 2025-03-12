import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const ContentAddress = styled.div``;

export const Address = styled.div`
  width: 40rem;
  height: 23.25rem;
  display: flex;
  flex-direction: column;

  div h3 {
    font-family: "Baloo 2", serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  form {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 40px;
    width: 100%;
    gap: 1rem;
    border-radius: 6px;
    
    #details {
      display: flex;
      align-items: center;

      span {
        font-family: Roboto "sans-serif";
        text-align: center;
        font-size: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
    #informe {
      font-family: Roboto "sans-serif";
      font-size: 1rem;
      margin-left: 32px;
      color: ${(props) => props.theme["base-text"]};
    }

  }
`;

export const InputRua = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 1rem;

  input {
    width: 12.5rem;
    height: 2.625rem;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 5px;
    border: 2px solid #E6E5E5;
  }

  input + input {
    width: 35rem;
    height: 2.625rem;

  }
`;
export const InputNumero = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 0.5rem;

  input {
    width: 12.5rem;
    height: 2.625rem;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 5px;
    border: 2px solid #E6E5E5;

  }

  input + input {
    width: 21.88rem;
    height: 2.625rem;

  }

`;
export const InputBairro = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  
  width: 100%;

  input {
    width: 12.5rem;
    height: 2.625rem;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 5px;
    border: 2px solid #E6E5E5;

  }

  input + input {
    width: 17.75rem;
    height: 2.625rem;
  }

  input:last-child{
    width: 3.75rem;
    height: 2.625rem;
  }
`;

export const PaymentMethod = styled.div`
  width: 40rem;
  height: 12.95rem;
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};


  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-family: Roboto, sans-serif;
      font-size: 0.975rem;
      color: ${(props) => props.theme['base-text']};
    }

  }

  #textFormaDePagar {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-family: Roboto, sans-serif;
    margin-left: 2.3rem;
  }

  button {
    width: 11.175rem;
    height: 3.185rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    font-size: 0.75rem;
    font-family: Roboto, sans-serif;
    color: ${(props) => props.theme['base-text']};
    padding-left: 1rem;
    gap: 1rem
  }
`;
