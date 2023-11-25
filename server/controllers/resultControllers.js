const db = require('../db')
class ResultControllers {
    static async getAllData (req,res){
        try {
            const allData = await db ('tb_result').select('id', 'title', 'descriptions')
            res.status(200).json(allData)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getOneData(req,res){
        const getIdOne = req.params.id
        const oneData = await db('tb_result').where('id', getIdOne).first().returning('*')
        res.status(200).json(oneData)
        
    }
    static async store (req,res){
        const { title, descriptions} =req.body
        const curDateStore = new Date()
        
        const resultStore = await db('tb_result').insert({
            title,
            descriptions,
            created_at:curDateStore,
            updated_at: null
        }).returning('*')
        res.status(201).json(resultStore)
    }
    static async update (req,res){
        const idUpdate = req.params.id
        const {title, descriptions} =  req.body
        const curDateUpdate = new Date()

        const resultUpdate = await db('tb_result').where('id', idUpdate).update({
            title,
            descriptions,
            updated_at:curDateUpdate

        }).returning('*')
        res.status(200).json(resultUpdate)
    }
    static async delete (req,res){
        const idDelete = req.params.id

        await db ('tb_result').where('id', idDelete).del()
        res.status(200).json({massage : `delete id ${idDelete} succesfuly`})
    }
}
module.exports = ResultControllers