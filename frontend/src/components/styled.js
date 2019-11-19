import styled from 'styled-components';

export const StyledLogin = styled.div`
    margin: 0 auto;
    width: 80%;
`

export const StyledComments = styled.div`
    margin: 0 auto;
    width: 80%;
`

export const StyledComment = styled.div`
`

export const Score = styled.span`
    float: right;
`
export const Plus = styled.span`
    color: white;
    background: green;
    width: 20px;
    display: inline-block;
    font-size: 17px;
    box-sizing: border-box;
    text-align: center;

    :hover{
        cursor: pointer;
    }
    :active{
        background: blue;
    }
`

export const Minus = styled.span`
    color: white;
    background: red;
    width: 20px;
    display: inline-block;
    font-size: 17px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5px;

    :hover{
        cursor: pointer;
    }
    :active{
        background: blue;
    }
`

export const StyledTextarea = styled.textarea`
    width: 60vw;
    margin: 0;
    resize: none;
    height: 20vh;
`

export const AddComment = styled.button`
    display: inline-block;
    margin-top: -20vh;
    width: 19vw;
`

export const StyledHeader = styled.div`
    height: 200px;
    width: 100vw;
`
