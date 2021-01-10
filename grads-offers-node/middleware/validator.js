const Joi = require("joi");

const validator = (req,res,next) => {
    const schema = Joi.object({
        title: Joi.string()
                  .alphanum()
                  .min(3)
                  .max(15)
                  .required()
    });
    const { error, value} = schema.validate({title:req.body.name || req.body.title});
    if(error) return next(error);
    next();
};

module.exports = validator;