import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeList, Container, Content, Heading, Info } from "./styles";
import { useTheme } from "styled-components";
import ImgBack from '../../../public/images/hero-bg.svg'
import {coffees} from '../../../data.json'
import { Card } from "../../components/Card";

export function Home() {
  const theme = useTheme()
  return (
    <Container>
      <Content>
        <div>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Heading>

          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </Info>
        </div>
        <img src="/images/hero.svg" alt="logo Coffee Delivery" />
      </Content>
      <img src={ImgBack} id="hero-bg" alt="" />

        <h2>Nossos Cafés</h2> 
      <CoffeeList>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </Container>

  )
}