import { Banner } from "../../components/Banner";
import { Coffee } from "../../components/Coffee";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {
    return (
       <Container>
        <Header />
        <Banner />
        <Coffee />
       </Container>
    )
}