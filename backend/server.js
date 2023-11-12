const express = require("express");
const cors = require("cors");

const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "11082003";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/prog`);

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// db.any - 0 ou mais resultados
// db.all - retornar 1 ou mais resultados
// db.one - apenas 1 resultado
// db.none - não retorna resultado - quando atualizamos as estruturas do BD

app.get("/cursos", async (req, res) => {
  try {
    const cursos = await db.any("SELECT * FROM cursos;");
    console.log("Retornando todos cursos.");
    res.json(cursos).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.get("/curso", async (req, res) => {
  try {
    const cursoId = parseInt(req.query.id);
    console.log(`Retornando ID: ${cursoId}.`);
    const curso = await db.one(
      "SELECT id, nome, descr FROM cursos WHERE id = $1;",
      cursoId
    );
    res.json(curso).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.post("/curso", async (req, res) => {
  try {
    const cursoNome = req.body.nome;
    const cursoDescr = req.body.descr;
    console.log(`Nome: ${cursoNome} - Descr: ${cursoDescr}`);
    await db.none("INSERT INTO cursos (nome, descr) VALUES ($1, $2);", [
      cursoNome,
      cursoDescr,
    ]);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});







app.get("/matutino", async (req, res) => {
  try {
    const matutino = await db.any("SELECT * FROM matutino;");
    console.log("Retornando todos os horários da manhã.");
    res.json(matutino).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.get("/matutino/:id", async (req, res) => {
  try {
    const matutinoId = parseInt(req.params.id);
    console.log(`Retornando ID: ${matutinoId}.`);
    const horarioMatutino = await db.one(
      "SELECT id, segunda, terca, quarta, quinta, sexta FROM matutino WHERE id = $1;",
      matutinoId
    );
    res.json(horarioMatutino).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.post("/matutino", async (req, res) => {
  try {
    const matutinoSegunda = req.body.segunda;
    const matutinoTerca = req.body.terca;
    const matutinoQuarta = req.body.quarta;
    const matutinoQuinta = req.body.quinta;
    const matutinoSexta = req.body.sexta;
    console.log(
      `Segunda: ${matutinoSegunda} - Terca: ${matutinoTerca} - Quarta: ${matutinoQuarta} - Quinta: ${matutinoQuinta} - Sexta: ${matutinoSexta}`
    );
    await db.none(
      "INSERT INTO matutino (segunda, terca, quarta, quinta, sexta) VALUES ($1, $2, $3, $4, $5);",
      [
        matutinoSegunda,
        matutinoTerca,
        matutinoQuarta,
        matutinoQuinta,
        matutinoSexta,
      ]
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});




app.get("/vespertino", async (req, res) => {
  try {
    const vespertino = await db.any("SELECT * FROM vespertino;");
    console.log("Retornando todos os horários da tarde.");
    res.json(vespertino).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.get("/vespertino/:id", async (req, res) => {
  try {
    const vespertinoId = parseInt(req.params.id);
    console.log(`Retornando ID: ${vespertinoId}.`);
    const horarioVespertino = await db.one(
      "SELECT id, segunda, terca, quarta, quinta, sexta FROM vespertino WHERE id = $1;",
      vespertinoId
    );
    res.json(horarioVespertino).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.post("/vespertino", async (req, res) => {
  try {
    const vespertinoSegunda = req.body.segunda;
    const vespertinoTerca = req.body.terca;
    const vespertinoQuarta = req.body.quarta;
    const vespertinoQuinta = req.body.quinta;
    const vespertinoSexta = req.body.sexta;
    console.log(
      `Segunda: ${vespertinoSegunda} - Terca: ${vespertinoTerca} - Quarta: ${vespertinoQuarta} - Quinta: ${vespertinoQuinta} - Sexta: ${vespertinoSexta}`
    );
    await db.none(
      "INSERT INTO vespertino (segunda, terca, quarta, quinta, sexta) VALUES ($1, $2, $3, $4, $5);",
      [
        vespertinoSegunda,
        vespertinoTerca,
        vespertinoQuarta,
        vespertinoQuinta,
        vespertinoSexta,
      ]
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});



app.get("/Noturno", async (req, res) => {
  try {
    const noturno = await db.any("SELECT * FROM noturno;");
    console.log("Retornando todos os horários da tarde.");
    res.json(noturno).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.get("/noturno/:id", async (req, res) => {
  try {
    const noturnoId = parseInt(req.params.id);
    console.log(`Retornando ID: ${noturnoId}.`);
    const horarioNoturno = await db.one(
      "SELECT id, segunda, terca, quarta, quinta, sexta FROM noturno WHERE id = $1;",
      noturnoId
    );
    res.json(horarioNoturno).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.post("/noturno", async (req, res) => {
  try {
    const noturnoSegunda = req.body.segunda;
    const noturnoTerca = req.body.terca;
    const noturnoQuarta = req.body.quarta;
    const noturnoQuinta = req.body.quinta;
    const noturnoSexta = req.body.sexta;
    console.log(
      `Segunda: ${noturnoSegunda} - Terca: ${noturnoTerca} - Quarta: ${noturnoQuarta} - Quinta: ${noturnoQuinta} - Sexta: ${noturnoSexta}`
    );
    await db.none(
      "INSERT INTO noturno (segunda, terca, quarta, quinta, sexta) VALUES ($1, $2, $3, $4, $5);",
      [
        noturnoSegunda,
        noturnoTerca,
        noturnoQuarta,
        noturnoQuinta,
        noturnoSexta,
      ]
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});


app.post("/api/follow", (req, res) => {
  const { follow } = req.body;

  console.log(follow);
  res.send(follow);
});