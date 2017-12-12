const apiRouter = require('express').Router();
const Student = require('../db/models').Student;

module.exports = apiRouter;

apiRouter.get('/', (req, res, next) => {
    Student.findAll()
        .then(students => res.json(students))
        .catch(next);
});

apiRouter.get('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(student => res.json(student))
        .catch(next);
});

apiRouter.post('/', (req, res, next) => {
    Student.create(req.body)
        .then(student => res.json(student))
        .catch(next);
});

apiRouter.put('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(student => student.update(req.body))
        .catch(next);
});

apiRouter.delete('/:studentId', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
        .then(() => res.status(204).end())
        .catch(next);
});