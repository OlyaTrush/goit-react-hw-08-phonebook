import styled from "styled-components";

export const Div = styled.div`
    width:310px;
`;

export const Label = styled.label`
    display: block;
    font-size: 20px;
    line-height: 1.17;
    letter-spacing: 0.01em;
    color: #757575;
    margin-bottom: 15px;
    /* text-align: center; */
    cursor: pointer;
    
`;

export const Input = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 15px;
    outline: none;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: 10px;
    &:hover,
    &:focus {
        border: 1px solid #2196F3;
    }

    &:hover+.form-icon,
    &:focus+.form-icon {
        fill: #2196F3;
    }
`;

export const Button = styled.button`
    width: 100px;
    height: 30px;
    background: #778899;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
    display: block;
    margin-left: 130px;
   

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    cursor: pointer;

    &:hover,
    &:focus {
        background: #188CE8;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
`