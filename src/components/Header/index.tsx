import { HeaderContainer, HeaderContent, Location, Cart } from "./styles"
import Logo from '../../assets/images/Logo.svg'
import { MapPin } from "phosphor-react"
import Icon from '../../assets/images/Icon.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo}/>
                <Location>
                    <div className="map">
                        <MapPin size={22} color="#8047F8" />
                            <p>
                                Fortaleza, CE
                            </p>
                    </div>
                    <div className="cart">
                        <Cart>
                            <img src={Icon} />
                        </Cart>    
                    </div>
                </Location>
                
            </HeaderContent>
        </HeaderContainer>
    )
}