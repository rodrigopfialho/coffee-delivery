import styled from "styled-components";

export const BannerContainer = styled.section`
    background-image: url("../../../public/images/Background.png");
    width: 100%;
    max-width: 1440px;
    height: 544px;

    display: flex ;
    grid-template-columns: 1fr 1fr;

    /* margin: 2.875rem 6rem; */
    justify-content: space-between ;

`;

export const BannerContent = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2.875rem 6rem;
`;

export const SectionDescription = styled.div`
    width: 90%;

    strong {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        color: ${(props) => props.theme['gray-700']};
        align-self:stretch ;
        line-height: 130%;
        width: 36.75rem;
        white-space: wrap;
        text-align: right;

    }

    p {
        font-family: Roboto ;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme['gray-500']};
        font-stretch: 100;
        white-space: wrap;
        padding: 16px 0 40px 0;
    }

`;

export const SectionInfo = styled.div`
    display: flex;
    width: 35.437rem ;

    ul {
        display: flex;
        flex-wrap:wrap ;
        list-style-type: none;
        
        li {
            width: 261px ;
            display: flex;
            margin-top: 20px;
            align-items: center ;
            padding-right: 25px; 

            p {
                display: flex ;
                white-space: nowrap;
                font-family: Roboto ;
                font-weight: 400;
                font-size: 1rem;
                line-height: 20.8px;
            }

            .img {
                padding: 8px ;
                border-radius: 50px;
                /* background-color: blue; */
            }

            span {
                display: flex ;
                justify-content: center ;
                align-items: center;
                margin-right: 12px;
            }
        }

        .cart{
            background-color: ${(props) => props.theme['yellow-900']};
        }

        .package{
            background-color: ${(props) => props.theme['gray-400']};
        }

        .time{
            background-color: ${(props) => props.theme['yellow-500']};
        }

        .coffee{
            background-color: ${(props) => props.theme['purple-500']};
        }
    }

`;

export const SectionImage = styled.div` 
    width: 29.75rem; 
`;