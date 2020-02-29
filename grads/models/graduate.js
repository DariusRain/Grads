//Graduate Schema

    // #1 Import mongoose then create a mongoose schema.
    const mongoose = require('mongoose'),
        GraduateSchema = new mongoose.Schema({
            avatar: {
                type: String,
                default: 'https://bit.ly/2wzdL2x'
            },
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            about: {
                type: String,
                default: 'N/A',
            },
            education: {
                type: String,
                default: 'N/A',
            },
            jobtitle: {
                type: String,
                default: 'N/A'
            }
            
        });

     // #2 Export graduate model to be used anywhere  
    module.exports = mongoose.model('Graduate', GraduateSchema)
