import styled from 'styled-components'


export const StyledDivPilotDetails = styled.div`
    h1{
        color: #F56F36;
        text-align: center;
    }
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 450px;
    background: #1F2738;
    border: 1px solid #6a6ab11f;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 35%) 2px 2px 2px 0px;
    padding: 5px;
    .reqContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        .specs{
            display: flex;
            flex-direction: column;
            align-items: left;
            margin-left: 10px;
            p{
                color: #F56F36;
                strong{
                    color: #F56F36
                }
            }

        }

    }
    `




