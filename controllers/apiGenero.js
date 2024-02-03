import {db} from '../db/conn.js';

const getGenero = async (req, res) => {
 
    const sql = `SELECT * FROM tbl_genero ORDER BY id`;
    const result = await db.query(sql);
    res.json(result);
};

const postGenero = async (req,res) => {

    const {nombre_genero} = req.body;
    const params = [nombre_genero];
 
    const sql = `INSERT INTO tbl_genero
                 (nombre_genero)
                 VALUES
                 ($1) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);   

};

const putGenero = async (req,res) => {

    const {nombre_genero} = req.body;
    const {id} = req.params;
    
    const params = [
        nombre_genero,
        id
    ];
    
    const sql = `update tbl_genero 
    set
     nombre_genero = $1
    where id = $2 returning *`;
    
    const result = await db.query(sql, params);
    res.json(result);
    
    };

    const dltGenero = async (req,res) => {
        const params = [req.params.id];
    
        const sql = `DELETE FROM tbl_genero WHERE id = $1 returning *`;
        const result = await db.query(sql,params);
    
        res.json(result);
    };

export {getGenero, postGenero, putGenero, dltGenero}