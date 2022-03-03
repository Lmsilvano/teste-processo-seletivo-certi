import styled from 'styled-components'


export const StyledDivInputPilots = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px auto;
    width: 50%;
    gap: 10px;
    input{
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 8px;
        padding: 3px;
        font-size: larger;
        letter-spacing: 1px;
        box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
        :focus{
            transition: 250ms;
            box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
            
        }
    }
    h3{
        font-weight: 560;
        letter-spacing: 1px;
        transition: 250ms;
    }


`

export const StyledDivContainerPilots = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    h3{
            font-weight: 500;
            letter-spacing: 1px;
        }

    
    `
export const StyledDivCardsPilots = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    min-width: 265px;
    max-width: 200px;
    height: 585px;
    margin: 10px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
    .pilotsIMGdiv{
        width: auto;
        height: 265px;
        flex:1;
        .cardIMGPilots{
        width: 250px;
        height: 250px;
        border-radius: 10px;
        
       }
    }

    .cardContentPilots{
        display: flex;
        flex-direction: column;
        margin: 10px;
        flex:2;
        align-content: center;
        justify-content: center;
        align-items: flex-start;
        text-align: justify;
        width: 230px;

        h3{
            font-weight: 650;
            letter-spacing: 1px;
            color: #F56F36;
            width: 220px;
            height: 30px;
            text-align: left;
            margin-bottom: 20px;
            
        }
        .cardContentInfo{
            margin-top: 6px;
            p{
                text-align: left;
                color: #1F2738;
                font-weight: 650;
                margin-top: 5px;
                overflow: hidden; 
                text-overflow: ellipsis; 
                display: -webkit-box;
                -webkit-line-clamp: 5; 
                -webkit-box-orient: vertical; 
            }
            strong{
                color: #F56F36;
            }
        }
    }
    a{
        width: 100%;
        text-decoration: none;
        color: white;
        border: 1px solid rgba(0,0,0,0.1);
        background: #1F2738;
        padding: 5px;
        border-radius: 8px;
        font-weight: 500;
        :hover{
            transition: 650ms;
            background: #F56F36;
            color: #000;
            font-weight: bold;
        }
    }
    

    
    `