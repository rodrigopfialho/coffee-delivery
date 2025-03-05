import { Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, MapPinPlus, MapPinSimpleArea, Money } from "@phosphor-icons/react";
import { Container } from "../Home/styles";

import { useForm } from "react-hook-form";
import { Address, ContentAddress, PaymentMethod } from "./styled";
import { useTheme } from "styled-components";

export function Cart() {

  const theme = useTheme()

  const {register, handleSubmit} = useForm()

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
                weight="fill"
                color={theme["yellow-dark"]}
                style={{color: theme["yellow-dark"], marginRight: 10 }}
              />
              <span>Endereço de Entrega</span>
            </div>
              <span id="informe">Informe o endereço onde deseja receber seu pedido</span>
            <div id="ruaecep">
              <input type="number" placeholder="CEP"/>
              <input type="text" placeholder="Rua"/>
            </div>
            <div>
              <input type="number" placeholder="Número"/>
              <input type="" placeholder="Complemento opcional"/>
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
            <PaymentMethod>
              <CurrencyDollar size={16}/>
              <span>Pagamento</span>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
              <button>
                <CreditCard size={16}/>
                <span>CARTÃO DE CRÉDITO</span>
              </button>
              <button>
                <Money size={16}/>
                <span>CARTÃO DE DÉBITO</span>
              </button>
              <button>
                <Bank size={16}/>
                <span>DINHEIRO</span>
              </button>
            </PaymentMethod>
            
          </form>

        </Address>
        
      </ContentAddress>
    </Container>
      // <ContentSelectedCoffee>
      //   <SelectedCoffee>

      //   </SelectedCoffee>
      // </ContentSelectedCoffee>
  )
}