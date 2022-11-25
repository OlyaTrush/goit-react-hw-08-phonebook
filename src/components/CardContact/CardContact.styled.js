import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 5px;
border-radius: 2px;

    &:hover {
        box-shadow: 0px 5px 10px 2px rgba(139, 192, 232, 0.2);
    }
`;

export const Button = styled.button`
    width: 55px;
    height: 20px;
    background: #778899;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
    display: inline-block;
    margin-left: 10px;


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
`;