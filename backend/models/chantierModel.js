// const { model, Schema } = require('mongoose')

// const chantierSchema = new Schema({
//     benefNom: {
//         type: String,
//         required: true
//     },
//     benefPreNom: {
//         type: String,
//         required: true
//     },
//     chantierAdresse: {
//         type: String,
//         required: true
//     },
//     chantierAdresseDO: {
//         type: String,
//         required: true
//     },
//     chantierNomDO: {
//         type: String,
//         required: true
//     },
//     chantierSirenDO: {
//         type: String,
//         required: true
//     },
//     clientName: {
//         type: String,
//         required: true
//     },    
//     operationName: {
//         type: String,
//         required: true
//     },
//     chantierStatus: {
//         type: String,
//         default: 'Non Validé'
//     },
//     pdfs: [
//       {
//         type: Schema.Types.ObjectId, 
//         ref: 'PdfDetails',
//       },
//     ],
// }, { timestamps: true })

// module.exports = model('chantiers', chantierSchema)