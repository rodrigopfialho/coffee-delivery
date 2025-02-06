 
import { Plus, ShoppingCart } from "@phosphor-icons/react";
import { Container, InfoCoffee,Tags, Info, Price } from "./styles";
import { Minus } from "@phosphor-icons/react/dist/ssr";

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
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
          <div>
            <button>
              <Minus size={14}/>
            </button>
            <span>1</span>
            <button>
              <Plus size={14}/>
            </button>
          <ShoppingCart />
          </div>
        </Price>
      </InfoCoffee>
    </Container>
  )
}