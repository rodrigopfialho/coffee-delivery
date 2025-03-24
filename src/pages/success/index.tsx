import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import Delivery from '../../../public/images/delivery.svg'
import { Aside, Container, Content, Info } from './styled'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

  return (
    <Container>
      <Content>
        <h3>Uhu! Pedido confirmado</h3>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <Info>
          <div>
            <MapPin 
              size={32}
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['purple'] }}
            />
            <div>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>  
          </div>

          <div>
            <Timer 
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['yellow'] }}
              size={32}
            />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>    
          </div>

          <div>
            <CurrencyDollar 
              size={32} 
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme['yellow-dark'] }}
            />
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>          
          </div>
        </Info>
      </Content>

      <Aside>
        <img src={Delivery}/>
      </Aside>
    </Container>
  )
}