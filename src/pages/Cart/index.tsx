import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";

// import { useForm } from "react-hook-form";
import {
  Address,
  ContentAddress,
  Container,
  ContentSelectedCoffee,
  InputBairro,
  InputNumero,
  InputRua,
  OrderConfirmation,
  PaymentMethod,
  SelectedCoffee,
  ButtonConfirm,
} from "./styled";
import { useTheme } from "styled-components";
import Expresso from "../../../public/images/coffees/expresso.png";

export function Cart() {
  const theme = useTheme();

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
                style={{ marginRight: 10 }}
              />
              <span>Endereço de Entrega</span>
            </div>
            <span id="informe">
              Informe o endereço onde deseja receber seu pedido
            </span>
            <InputRua>
              <input type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
            </InputRua>

            <InputNumero>
              <input type="number" placeholder="Número" />

              <input type="" placeholder="Complemento opcional" />
            </InputNumero>

            <InputBairro>
              <input type="text" placeholder="Bairro" />

              <input type="text" placeholder="Cidade" />

              <input type="text" placeholder="UF" />
            </InputBairro>
          </form>

          <PaymentMethod>
            <div>
              <CurrencyDollar size={22} color={theme["purple"]} />
              <span>Pagamento</span>
            </div>
            <span id="textFormaDePagar">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
            </span>
            <div>
              <button type="button">
                <CreditCard size={16} color={theme["purple"]} />
                CARTÃO DE CRÉDITO
              </button>
              <button type="button">
                <Money size={16} color={theme["purple"]} />
                CARTÃO DE DÉBITO
              </button>
              <button type="button">
                <Bank size={16} color={theme["purple"]} />
                DINHEIRO
              </button>
            </div>
          </PaymentMethod>
        </Address>
      </ContentAddress>

      <ContentSelectedCoffee>
        <h3>Cafés selecionados</h3>
        <SelectedCoffee>          
          <div>
            <img src={Expresso} alt="" />
            <span id="legendCoffee">Expresso Tradicional</span>
            <strong>R$ 9,90</strong>
          </div>
          <div id="GroupButton">
            <div id="ButtonADDeMinus">
              <button>
                <Minus size={14} color={theme["purple"]} />
              </button>
              <span>1</span>
              <button>
                <Plus size={14} color={theme["purple"]} />
              </button>
            </div>
            

            <button id="ButtonRemove">
              <Trash size={14} color={theme["purple"]} />
              REMOVER
            </button>
          </div>
          

          <OrderConfirmation>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
            <ButtonConfirm type="button">
              Confirmar Pedido
            </ButtonConfirm>
          </OrderConfirmation>
        </SelectedCoffee>
      </ContentSelectedCoffee>
    </Container>
  );
}
