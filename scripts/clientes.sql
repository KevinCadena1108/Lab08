-- DROP TABLE clientes;
--create  database prog;
--\c prog
--set datestyle to 'ISO,DMY';

CREATE TABLE cursos
(
    id SERIAL PRIMARY KEY,
    nome VARCHAR not null,
    descr VARCHAR not null
);


CREATE TABLE matutino
(
    id SERIAL PRIMARY KEY,
    segunda VARCHAR not null,
    terca VARCHAR not null,
    quarta VARCHAR not null,
    quinta VARCHAR not null,
    sexta VARCHAR not null

);

INSERT INTO matutino (segunda, terca, quarta, quinta, sexta)
VALUES ('Prog', 'Algebra', 'Org', 'Cálculo', 'BD');


CREATE TABLE vespertino
(
    id SERIAL PRIMARY KEY not null,
    segunda VARCHAR not null,
    terca VARCHAR not null,
    quarta VARCHAR not null,
    quinta VARCHAR not null,
    sexta VARCHAR not null

);

CREATE TABLE noturno
(
    id SERIAL PRIMARY KEY not null,
    segunda VARCHAR not null,
    terca VARCHAR not null,
    quarta VARCHAR not null,
    quinta VARCHAR not null,
    sexta VARCHAR not null

);



-- SELECT * FROM clientes;