import styled from 'styled-components'


export const StyledDivContainerPilotDetail = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 80%;
    flex-wrap: wrap;
    .pilotDetailTitle{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .pilotTitle{
            font-size: 200%;
            color: #F56F36;
            text-shadow: -1px 1px 0px #891b1b;
        }
        span{
            font-size: 120%;
            letter-spacing: 1px;
            font-weight: 710;
            color: #F56F36;
        }
    }
    .maindetailpilot {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }
    `
export const StyledSectionStarShipPilot = styled.section` 
    display: column;
    width: 100%;
    h1{
            font-size: 170%;
            color: #F56F36;
            text-shadow: -1px 1px 0px #891b1b;
            text-align: center;
            margin: 20px;
        }

    .pilotstarshipscards{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin: auto;

    }
`




