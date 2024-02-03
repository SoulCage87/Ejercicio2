/* 2024-01-26 18:38:32 [561 ms] */ 
CREATE TABLE tbl_videjuegos
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    desarrollador VARCHAR(30),
    id_genero INT REFERENCES tbl_genero(id),
    id_pasillo INT REFERENCES tbl_pasillo(id),
    Registrado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/* 2024-01-26 18:54:15 [16 ms] */ 

/* 2024-01-26 18:54:26 [17 ms] */ 

CREATE TABLE tbl_genero
(
    id SERIAL PRIMARY KEY,
    nombre_genero VARCHAR(30)
);

CREATE TABLE tbl_pasillo
(
    id SERIAL PRIMARY KEY,
    num_pasillo INT,
    num_estante INT
   
);

DROP TABLE tbl_genero

DROP TABLE tbl_pasillo

Drop TABLE tbl_videjuego


SELECT
    v.id AS id_videojuego,
    v.nombre AS nombre_videojuego,
    v.desarrollador,
    g.nombre_genero,
    p.num_pasillo,
    p.num_estante
FROM
    tbl_videjuegos v
JOIN
    tbl_genero g ON v.id_genero = g.id
JOIN
    tbl_pasillo p ON v.id_pasillo = p.id;







