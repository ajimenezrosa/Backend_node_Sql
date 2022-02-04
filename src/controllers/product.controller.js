import { query } from 'mssql';
import { restart } from 'nodemon';
import {getConections, sql, queries}  from '../database';
// import query from '../database/querys';

export const getProducts = async (req, res) => {
    
    
    
    try {
        const pool = await getConections();
    
        const result = await pool.request().query(queries.getAllProduct);
       console.log(result);
       res.json(result.recordset);
        
    } catch (error) {
        // console.log(error);
        res.status(500);
        res.send(error.message)
    }


};



export const createNewProduct = async (req, res) => {
    const {name, description} = req.body
    let  {quantity} = req.body;

    
    
    try {
        if(name == null || description == null) {
            return res.status(400).json({msg: 'Bad request. Please Fill al fields'});
        }
        if(!quantity) quantity = 0;
        
        // console.log(name, description, quantity);
    
        const pool = await getConections();
        await pool.request()
        .input("name", sql.VarChar, name)
        .input("description", sql.VarChar, description)
        .input("quantity", sql.Int, quantity)
        
        .query(queries.addNewProduct);
    
        res.json({name , description, quantity});
        
    } catch (error) {
        // console.log(error);
        res.status(500);
        res.send(error.message)
    }

}


export const getProductById = async (req, res ) => {

    const { id } = req.params;
    const pool = await getConections();
    const result = await pool.request()
    .input("Id", id)
    .query(queries.getProductById)


    // console.log(result.recordset[0]);

    res.send(result.recordset[0]);
}



export const deleteProductById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConections();
    const result= await pool.request()
    .input('Id', id)
    .query(queries.deleteProduct)

    console.log({msg: 'Registro Eliminado con exito'})

    res.send(result.recordset[0])
}


export const getProductCount = async (req, res) => {

    const pool = await getConections();

    const result = await pool
        .request()
        .query(queries.getProductCount);

        res.json(result.recordset[0])

        // console.log(result)
        // res.sendStatus(204);

}


export const updateProductById = async (req, res) =>
{

    const { name , description , quantity } = req.body;
    const { id } = req.params; 


    if(name == null || description == null || quantity == null) {
        return res.status(400).json({msg: 'Bad request. Please Fill al fields'});
    }
 


    const pool = await getConections();
    await pool.request()
                .input('name' , sql.VarChar, name)
                .input('description', sql.Text, description )
                .input('quantity', sql.Int, quantity)
                .input('Id', sql.Int, id )
                .query(queries.updatePorduct);


    res.json({name, description,quantity});

}