import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  pointer-events: ${props => props.disabled ? 'none' : 'unset' };
  opacity: ${props => props.disabled ? 0.65 : 100 }

`
