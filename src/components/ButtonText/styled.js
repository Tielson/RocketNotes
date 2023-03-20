import styled from "styled-components";

export const Container = styled.button`
font-size: 16px;

border: none;
background: none;
color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`