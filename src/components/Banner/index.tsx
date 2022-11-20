import { BannerContainer, BannerContent, SectionDescription, SectionImage, SectionInfo } from "./styles";
import BannerCoffer from '../../../public/images/coffee-banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Banner() {
    return (
       <BannerContainer>
            <BannerContent>
                <SectionDescription>
                    <strong>
                        Encontre o café perfeito para qualquer hora do dia
                    </strong>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, 
                        a <br />qualquer hora
                    </p>
                </SectionDescription>
                <SectionInfo>
                    <ul>
                        <li>
                            <span className="cart img">
                                <ShoppingCart size={16} color="#fff" weight="fill"/>
                            </span>
                            <p>Compra simples e segura</p>
                        </li>
                        <li>
                            <span className="package img">
                                <Package size={16} color="#fff" weight="fill"/>
                            </span>
                            <p>Embalagem mantém o café intacto</p>
                        </li>
                        <li>
                            <span className="time img">
                                <Timer size={16} color="#fff" weight="fill"/>
                            </span>
                            <p>Entrega rápida e rastreada</p>
                        </li>
                        <li>
                            <span className="coffee img">
                                <Coffee size={16} color="#fff" weight="fill"/>
                            </span>
                            <p>O café chega fresquinho até você</p>
                        </li>
                    </ul>
                </SectionInfo>
            </BannerContent>
            <SectionImage>
                <img src={BannerCoffer} />
            </SectionImage>
       </BannerContainer>
    )
}