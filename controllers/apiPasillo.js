import {db} from '../db/conn.js';

const getPasillo = async (req, res) => {
 
    const sql = `SELECT * FROM tbl_pasillo ORDER BY id`;
    const result = await db.query(sql);
    res.json(result);
};

const postPasillo = async (req,res) => {

    const {num_pasillo, num_estante} = req.body;
    const params = [num_pasillo,num_estante];
 
    const sql = `INSERT INTO tbl_pasillo
                 (num_pasillo,num_estante)
                 VALUES
                 ($1,$2) returning *`;
 
    const result = await db.query(sql, params); 
    res.json(result);   

};

const putPasillo = async (req,res) => {

    const {num_pasillo,num_estante} = req.body;
    const {id} = req.params;
    
    const params = [
        num_pasillo,
        num_estante,
        id
    ];
    
    const sql = `update tbl_pasillo 
    set
    num_pasillo = $1,
    num_estante = $2
    where id = $3 returning *`;
    
    const result = await db.query(sql, params);
    res.json(result);
    
    };

    const dltPasillo = async (req,res) => {
        const params = [req.params.id];
    
        const sql = `DELETE FROM tbl_pasillo WHERE id = $1 returning *`;
        const result = await db.query(sql,params);
    
        res.json(result);
    };

export {getPasillo, postPasillo, putPasillo, dltPasillo}