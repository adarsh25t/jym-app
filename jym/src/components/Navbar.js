import React from 'react'
import {Link} from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack 
        direction={'row'}
        gap={'40px'}
        justifyContent={'space-between'}
        sx={{ gap:{sm:'122px',xs:'40px'},mt:{sm:'30px',xs:'20px'}}}
    >
        <Link to={'/'}>
            <img src={Logo} />
        </Link>
        <Stack 
            direction={'row'}
            gap={'40px'}
            fontSize={'24px'}
            alignItems={'flex-end'}
        >
            <Link to={'/'}>Home</Link>
            <a href="#exercises">Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
