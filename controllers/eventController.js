'use strict';

const eventData = require('../data/events');

const getEvents = async(req, res, next) => {
    try {
        const events = await eventData.getEvents();
        res.send(events);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvent = async(req, res, next) => {
    try {
        const id_cliente = req.params.id;
        const oneEvent = await eventData.getById(id_cliente);
        res.send(oneEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addEvent = async(req, res, next) => {
    try {
        const data = req.body;
        const created = await eventData.createEvent(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEvent = async(req, res, next) => {
    try {
        const id_cliente = req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(id_cliente, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEvent = async(req, res, next) => {
    try {
        const id_cliente = req.params.id;
        const deleted = await eventData.deleteEvent(id_cliente);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getEvents,
    getEvent,
    addEvent,
    updateEvent,
    deleteEvent
}