import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";

function Titulo(props) {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ marginTop: "30px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontSize: "30px" }}
          sx={{ color: "black" }}
        >
          {props.mensagem}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Titulo;
