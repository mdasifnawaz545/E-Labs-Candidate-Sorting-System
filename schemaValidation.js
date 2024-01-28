const Joi=require('joi');
const studentSchema=Joi.object({
    student:Joi.object({
        timeStamp:Joi.string(),
        email:Joi.string().required(),
        name:Joi.string().required(),
        offEmail:Joi.string().required(),
        roll:Joi.number().required(),
        gender:Joi.string().required(),
        contactNumber:Joi.number().required(),
        yearOfStudy:Joi.string().required(), // Is this correct beacause i am using enumeration here.
        branch:Joi.string().required(),
        links:Joi.string().required(), // Is this Correct because i had used nesting objects here.
        existSocieties:Joi.string().required(),
        whyElabs:Joi.string().required(),
        anythingElse:Joi.string().required(),
    })
});

module.exports={studentSchema};

//Similary we have to make the validation for all of the respective domains ?.