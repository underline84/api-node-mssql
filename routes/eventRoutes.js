'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {getEvents, getEvent, addEvent, updateEvent, deleteEvent} = eventController;

router.get('/events', getEvents);
router.get('/events/:id', getEvent);
router.post('/create', addEvent);
router.put('/update/:id', updateEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = {
    routes: router
}
