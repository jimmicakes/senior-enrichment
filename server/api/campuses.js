const apiRouter = require('express').Router();
const Campus = require('../db/models').Campus;

module.exports = apiRouter;

apiRouter.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campuses => res.json(campuses))
        .catch(next);
});

apiRouter.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
        .then(campus => res.json(campus))
        .catch(next);
});

apiRouter.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then(campus => res.json(campus))
        .catch(next);
});

apiRouter.put('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
        .then(campus => campus.update(req.body))
        .catch(next);
});

apiRouter.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.campusId
        }
    })
        .then(() => res.status(204).end())
        .catch(next);
});