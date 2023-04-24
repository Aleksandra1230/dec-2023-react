import Joi from "joi";

Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-ЯёЁ]{1-20}$/).required().messages({
        'string.pattern.base':'Бренд має складатись тільки з литер мін 1 макс 20'
    })

})