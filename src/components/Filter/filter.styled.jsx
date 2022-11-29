import styled from "styled-components";

export const Div = styled.div`
    width:310px;
`
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