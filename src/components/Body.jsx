import styled from 'styled-components'
import bg_cafe from '../assets/images/bg_cafe.jpg'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Background = styled.div`
    background-image: url(${bg_cafe});
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%
`

export const Content = styled.div`
    position: absolute;
    top: 11rem;
    width: 80%;
    background-color: #1B1D1F;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 6rem;
    padding-bottom: 6rem;
    gap: 1.5rem;

    @media screen and (max-width: 1024px){
        top: 8rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    @media screen and (max-width: 640px){
        top: 3.75rem;
    } 
`

export const Heading = styled.div`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
`

export const Description = styled.div`
    width: 50%;
    font-size: 16px;
    text-align: center;
    color: #6F757C;
    font-weight: bold;

    @media screen and (max-width: 1024px){
        width: 65%;
    }

    @media screen and (max-width: 640px){
        width: 80%;
    }
`

export const Button = styled.button`
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    background-color: transparent;
    color: #FEF7EE;
    width: 135px;
    height: 30px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const MadeBy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.7rem;
    font-size: 14px;
`