import styled from "styled-components"

export const Container = styled.div`
    background: tomato;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    div{
        width: 33%;
        background: yellow;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;

        img {
            width: 53%;
        }
    }


`