import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #d9d5ca;
`
/*const HeaderHfont = styled.h2`
    font-size: calc(10px + 1vw);
    font-family: "myriad-bengali", sans-serif;
    font-weight: 800;
    font-style: normal;
    padding: 1rem;
    margin: 0;
`*/

const PageHeader = () => {
    return(
        <HeaderContainer>
            <img src="./pubic/zeni-logo.png" alt="Zeni logo" />
        </HeaderContainer>
    );
};

export default PageHeader;