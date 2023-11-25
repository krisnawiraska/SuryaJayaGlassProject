const db = require('../db')
class ResultDetailControllers {
    static async getAllData (req,res){
        const resultAll = await db ('tb_result_det').select('id', 'name', 'img', 'descriptions' )
        res.status(200).json(resultAll)
    }

    static async getOneData(req,res){
        try {
            const getIdOne = req.params.id
            const resultOne = await db('tb_result_det')
                .where('tb_result_det.id', getIdOne)
                .join('tb_result', 'tb_result_det.result_id', '=', 'tb_result.id')
                .select('tb_result.title', 'tb_result_det.name', 'tb_result_det.img', 'tb_result_det.descriptions')
                .returning('*')
            
            res.status(200).json(resultOne)
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    }
    static async store (req,res){
        const {result_id, name, descriptions} =req.body
        const img = req.file.path
        const curDateStore = new Date()

        const resultStore = await db('tb_result_det').insert({
            result_id,
            name,
            img,
            descriptions,
            created_at: curDateStore,
            updated_at: null
        }).returning('*')
        res.status(201).json(resultStore)
    }

    static async update (req,res){
        try {
            const idupdate = req.params.id
            const {result_id, name, descriptions} = req.body
            const img = req.file.path
            const curDateUpdate = new Date()
            const resultUpdate = await db('tb_result_det').where('id', idupdate).update({
                result_id,
                name,
                img,
                descriptions,
                updated_at: curDateUpdate
            
            }).returning('*')
            res.status(200).json(resultUpdate)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
    static async delete (req,res){
        const idDelete = req.params.id
        await db ('tb_result_det').where('id', idDelete).del()
        res.status(200).json({massage : `delete id ${idDelete} succesfully`})

    }
}
module.exports = ResultDetailControllers