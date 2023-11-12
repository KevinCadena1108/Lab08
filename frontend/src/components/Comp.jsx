import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function Comp() {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ fontSize: "20px", marginTop: "20px", marginLeft: "20px" }}
    >
      <Link underline="hover" color="black" href="#matutino">
        Matutino
      </Link>
      <Link underline="hover" color="black" href="#vespertino">
        Vespertino
      </Link>
      <Link underline="hover" color="black" href="#noturno">
        Noturno
      </Link>
      <Link underline="hover" color="black" href="#cursos">
        Cursos
      </Link>
    </Breadcrumbs>
  );
}

export default Comp;
