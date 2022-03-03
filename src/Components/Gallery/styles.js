import styled from 'styled-components'


export const StyledDivGallery = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 5px;
    flex-direction: column; 
    align-content: center;
    align-items: baseline;
    justify-content: center;
    width: 60%;
    flex-wrap: wrap; 
    align-items: center;
    .MainIMG{
        display: flex;
        align-items: center;
        gap: 2px;
        svg{
            color: #F56F36;
            font-size: 150%;
            cursor: pointer;
        }
        img{
            max-width: 550px;
            max-height: 550px;
            box-shadow: rgba(0,0,0,0.35) 0px 4px 12px;
            border: 1px solid rgba(0,0,0,0.1);
        }
    }
    .SecondaryIMG{
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
        margin: 10px;
        gap: 8px;
        img{
            width: 200px;
            height: 200px;
            border-radius: 15px;
            box-shadow: rgba(0,0,0,0.35) 0px 4px 12px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            
        }

    }
    `




