import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { Container } from "../Home/styles";

// import { useForm } from "react-hook-form";
import { Address, ContentAddress, InputBairro, InputNumero, InputRua, PaymentMethod } from "./styled";
import { useTheme } from "styled-components";

export function Cart() {

  const theme = useTheme()

  // const {register, handleSubmit} = useForm()

  return (
    <Container>
      <ContentAddress>
        <Address>
          <div>
            <h3>Complete seu pedido</h3>
          </div>
          <form action="">
            <div id="details">
              <MapPinLine
                size={22}
                fill={theme["yellow-dark"]}
                style={{marginRight: 10, }}
              />
              <span>Endereço de Entrega</span>
            </div>
            <span id="informe">Informe o endereço onde deseja receber seu pedido</span>
            <InputRua>
              <input
                type="number"
                placeholder="CEP"
              />
              <input
                type="text"
                placeholder="Rua"
              />
            </InputRua>

            <InputNumero>
              <input
                type="number"
                placeholder="Número"
              />

              <input
                type=""
                placeholder="Complemento opcional"
              />

            </InputNumero>

            <InputBairro>
              <input
                type="text"
                placeholder="Bairro"
              />

              <input
                type="text"
                placeholder="Cidade"
              />

              <input
                type="text"
                placeholder="UF"
              />
            </InputBairro>
          </form>

          <PaymentMethod>
            <div>
              <CurrencyDollar 
                size={22}
                color={theme["purple"]} 
              />
              <span>Pagamento</span>
            </div>
            <span id="textFormaDePagar">O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            <div>
              <button>
                <CreditCard 
                  size={16} 
                  color={theme["purple"]}
                />
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <Money 
                  size={16} 
                  color={theme["purple"]}
                />
                CARTÃO DE DÉBITO
              </button>
              <button>
                <Bank 
                  size={16} 
                  color={theme["purple"]}
                />
                DINHEIRO
              </button>
            </div>
          </PaymentMethod>

        </Address>

      </ContentAddress>
    </Container>
    // <ContentSelectedCoffee>
    //   <SelectedCoffee>

    //   </SelectedCoffee>
    // </ContentSelectedCoffee>
  )
}