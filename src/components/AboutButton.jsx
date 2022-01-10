import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const AboutButton = () => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Run</Button>
      <Button>Reset</Button>
      <Button data-cy="about-btn">About</Button>
    </ButtonGroup>
  )
}

export default AboutButton
