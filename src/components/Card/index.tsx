 
import { Plus, ShoppingCart } from "@phosphor-icons/react";
import { Container, InfoCoffee,Tags, Info, Price, Actions } from "./styles";
import { Minus } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "styled-components";
import { useState } from "react";

interface props {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[]
    price: number;
    image: string;
  }
}

export function Card({coffee}:props) {
  const [count, setCount] = useState(1)

  function handleincrement(){
    setCount((state) => state + 1)
  }

  function handledecrement() {
    if(count <= 1 ) {
      return
    }
    setCount((state) => state - 1)
  }

  const theme = useTheme()
  return (
    <Container>
      <InfoCoffee>
        <img src={coffee.image} />
        <Tags>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>
        <Info>
          <strong>{coffee.title}</strong>
          <span>{coffee.description}</span>
        </Info>
        <Price>
          <div>
            <span>R$</span>
            <span>{coffee.price.toFixed(2)}</span>
          </div>
          <Actions>
            <div>
              <button onClick={handledecrement}>
                <Minus size={14}/>
              </button>
              <span>{count}</span>
              <button onClick={handleincrement}>
                <Plus size={14}/>
              </button>
            </div>
            <button>
              <ShoppingCart 
                size={14}
                width={32}
                height={32}
                weight="fill"
                color={theme.white}
                style={{backgroundColor: theme.purple, borderRadius: 5, padding: 4}}
              />
            </button>
          </Actions>
        </Price>
      </InfoCoffee>
    </Container>
  )
}