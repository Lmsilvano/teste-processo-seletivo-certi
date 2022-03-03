import styled from 'styled-components'


export const StyledHeader = styled.header`
    display: flex;
    width: 100vw;
    height: 75px;
    background: #1F2738;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    box-shadow: rgba(0,0,0,0.35) 0px 4px 12px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
    a{
    text-decoration: none;
    .logo {
    width: auto;
    display: flex;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #fbfbfb;
    font-weight: bold;
    font-size: 28px;
    letter-spacing: 2px;
    cursor: pointer;
    .logo_sub1{
        color: #F56F36;
    }
    .logo_sub2{
        background: -webkit-linear-gradient(80deg, #ee7752, #e73c7e);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
        }
    }

        
    
    `