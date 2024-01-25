import styled from 'styled-components';
import { IButtonProps } from './types';

export const ButtonContainer = styled.button<IButtonProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;
    pointer-events: ${props => props.enabled ? 'auto' : 'none'}
    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`