import React, { useEffect, useState } from "react";
import Axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

const apiUrlMatutino = "http://localhost:3010/matutino";
const apiUrlVespertino = "http://localhost:3010/vespertino";
const apiUrlNoturno = "http://localhost:3010/noturno";

const Tabela = ({ apiUrl, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(
          `Erro ao buscar os dados do banco de dados (${title}):`,
          error
        );
      });
  }, [apiUrl, title]);

  return (
    <div style={{ marginBottom: "40px", marginTop: "30px" }}>
      <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
        {title}
      </Typography>
      <TableContainer sx={{ background: "#e8fde3" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Segunda
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Terça
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Quarta
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Quinta
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Sexta
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.segunda}</TableCell>
                <TableCell align="center">{row.terca}</TableCell>
                <TableCell align="center">{row.quarta}</TableCell>
                <TableCell align="center">{row.quinta}</TableCell>
                <TableCell align="center">{row.sexta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const MatutinoTable = () => (
  <Tabela id="matutino" apiUrl={apiUrlMatutino} title="Matutino" />
);

export const VespertinoTable = () => (
  <Tabela id="vespertino" apiUrl={apiUrlVespertino} title="Vespertino" />
);

export const NoturnoTable = () => (
  <Tabela id="noturno" apiUrl={apiUrlNoturno} title="Noturno" />
);

export default function App() {
  return (
    <div>
      <MatutinoTable />
      <VespertinoTable />
      <NoturnoTable />
    </div>
  );
}
