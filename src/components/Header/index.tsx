import { Container } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header(){
  return (
    <Container>
      <a href="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </a>
      <aside>
        <div>
          <MapPin size={22} weight="fill"/>
          <span>Fortaleza, CE</span>
        </div>
        <button>
          <ShoppingCart size={22} weight="fill"/>
        </button>
      </aside> 
    </Container>
  )
}