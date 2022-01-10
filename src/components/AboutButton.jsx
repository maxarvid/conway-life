import React, { useState } from "react";
import AboutModal from "./AboutModal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const AboutButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Run</Button>
      <Button>Reset</Button>
      <Button data-cy="about-btn" onClick={handleClickOpen}>About</Button>
      <AboutModal open={open} handleClose={handleClose}/>
    </ButtonGroup>
  );
};

export default AboutButton;
