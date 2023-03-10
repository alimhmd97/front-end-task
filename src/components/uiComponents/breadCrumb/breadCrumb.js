import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export  function BreadCrumb({title}) {
  const breadcrumbs = [
    <Link style={{display:'flex'}} underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      <HomeIcon sx={{fontSize:'1rem'}}/>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="#"
      onClick={handleClick}
      style={{fontSize:'11px'}}
    >
     Home
    </Link>,
    <Typography       style={{fontSize:'11px'}}
    key="3" color="text.primary">
     {title}
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{background:'white' ,padding:'5px 8px',borderRadius: '4px'}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}