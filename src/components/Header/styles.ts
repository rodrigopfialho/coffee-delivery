import  styled  from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    height: 104px;
`;

export const HeaderContent = styled.header`
    display: flex ;
    align-items: center;
    justify-content: space-between;
    margin: 0 6rem;
    width: 100%;

    @media(max-width: 700px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        padding: 0 2rem;
    }
`;

export const Location = styled.div`
    display: flex;
    height: 38px;

    .map{
        display: flex ;
        width: 8.93rem;
        align-items: center ;
        justify-content: space-evenly;
        border-radius: 6px;
        background-color: ${(props) => props.theme['purple-100']};
        margin-right: 12px ;
        
        p {
            font-size: 0.875rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-family: 'Roboto';
            line-height: 130%;

            color: ${(props)=> props.theme['purple-900']};
        }
    }
`;

export const Cart = styled.button`
    display: flex ;
    align-items: center;
    justify-content:center ;
    border-radius: 6px;
    height: 38px; 
    width: 38px;
    background-color: ${(props) => props.theme['yellow-100']}; 
    cursor: pointer ;
    border: none;
`;