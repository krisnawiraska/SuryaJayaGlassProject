const db = require('../db')
class JenisProductsControllers {
    static getAllData (req,res){
        res.send("masuk")   
    }
    static async getOneData(req,res){
        const getOneData = req.params.id
        console.log(getOneData);
        const resultOneData = await db ('tb_jenis_products').where({id:getOneData}).first()
        res.status(200).json(resultOneData)

    }
    static async store (req,res){
        const {name_jenis} = req.body
        const img = req.file.path

 
        // console.log(name_jenis, img);
        const curDate = new Date()
        try {
            const result = await db ('tb_jenis_products').insert({
                name_jenis,
                img,
                created_at: curDate,
                updated_at:null
            }).returning('*')            
            res.status(201).json(result)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async update (req,res){
        const getIdUpdate = req.params.id
        try {
            const {name_jenis} = req.body
            const img = req.file.path
            const curDateUpdate = new Date()
            const resultUpdate = await db('tb_jenis_products').where('id', getIdUpdate).update({
                name_jenis,
                img,
                updated_at:curDateUpdate
            }).returning('*')
            res.status(200).json(resultUpdate)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
    static async delete (req,res){
        const getIdDel = req.params.id
        const resdel = await db('tb_jenis_products').where({id:getIdDel}).del()
        res.status(200).json(`id ${getIdDel} succes deleted`)

    }
}
module.exports = JenisProductsControllers