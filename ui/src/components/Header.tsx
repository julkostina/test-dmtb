import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import theme from '../theme';

const HeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.ocean.main,
  color: theme.palette.common.white,
}));

const Logo = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '1.5rem',
}));

export default function Header() {
  return (
    <HeaderContainer color='custom'>
      <Logo to="/">Search movies service</Logo>
    
    </HeaderContainer>
  )
}