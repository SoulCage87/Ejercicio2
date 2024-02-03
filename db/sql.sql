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

SELECT a.*, b.nombre_genero AS genero, c.num_pasillo AS pasillo, c.num_estante AS estante
FROM tbl_videjuegos a
INNER JOIN tbl_genero b ON a.id_genero = b.id
INNER JOIN tbl_pasillo c ON a.id_pasillo = c.id;








