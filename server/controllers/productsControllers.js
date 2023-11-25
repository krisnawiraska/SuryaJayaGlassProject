const db = require('../db')
class ProductsControllers {
    static async getAllData (req,res){
        const result = await db ('tb_products')
        .join('tb_jenis_products', 'tb_products.jenis_id', '=', 'tb_jenis_products.id')
        .select('tb_jenis_products.name_jenis', 'tb_products.name', 'tb_products.price', 'tb_products.img').returning('*')
        res.status(200).json(result)
    }
    static getOneData(req,res){

    }
    static async store (req,res){
        const {jenis_id, name, price  } = req.body 
        const img = req.file.path
        const curDateStore = new Date()
        try {
            const result = await db ('tb_products').insert({
                jenis_id,
                name,
                price,
                img,
                created_at: curDateStore,
                updated_at: null
    
            }).returning('*')
            res.status(500).json(result)
            
        } catch (error) {
            res.status(500).json(error)
        }
        
    }
    static async update (req,res){
        const idUpdate = req.params.id
        const {jenis_id, name, price  } = req.body 
        const img = req.file.path
        const curDateStore = new Date()
        try {
            const result = await db ('tb_products').where('id', idUpdate).update({
                jenis_id,
                name,
                price,
                img,
                created_at: curDateStore,
                updated_at: null
    
            }).returning('*')
            console.log(result);
            
        } catch (error) {
            res.status(500).json(error)
        }

    }
    static async delete (req,res){
        const getIdDel = req.params.id
        const resdel = await db('tb_products').where({id:getIdDel}).del()
        res.status(200).json(`id ${getIdDel} succes deleted`)
    }
}
module.exports = ProductsControllers