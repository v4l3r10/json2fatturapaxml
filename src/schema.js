'use strict'

const Joi = require('joi')

const DatiTrasmissioneSchema = Joi.object().keys({
  IdTrasmittente: Joi.object().keys({
    IdPaese: Joi.string().required().length(2)
  }).required()
}).required()

const FatturaElettronicaHeaderSchema = Joi.object().keys({
  DatiTrasmissione: DatiTrasmissioneSchema
}).required()

module.exports = Joi.object().keys({
  FatturaElettronicaHeader: FatturaElettronicaHeaderSchema
})
