import Sauce from '../models/sauceModel.js'
import fs from 'fs'

export const getAllSauces = (req, res, next) => {
    // const allSauce = await Sauce.find({})
    // res.send(allSauce)

    Sauce.find({})
        .then(allSauces => res.status(200).json(allSauces))
        .catch(error => res.status(400).json({ error }));
    next()
}
export const getOneSauce = (req, res, next) => {
    console.log(req.params)
    // const oneSauce = await Sauce.find({_id : req.params.id})
    // res.send(oneSauce)
    Sauce.findOne({_id : req.params.id})
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }))
    next()
    
}
export const createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
    .then(() => res.status(201).json({ message: 'Sauce enregistrée !'}))
    .catch(error => res.status(400).json({ error }));
    next()
}
export const updateSauce = (req, res, next) => {
    const sauceObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Sauce modifiée !'}))
    .catch(error => res.status(400).json({ error }));
    next()
}
export const deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
            .catch(error => res.status(400).json({ error }));
      });
    })
    next()
}
export const likeSauce = (req, res, next) => {
    res.send(req.body)
    next()
}