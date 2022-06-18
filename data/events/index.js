'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.eventslist);
        return list.recordset;
        
    } catch (error) {
        return error.message;
    }
}

const getById = async(id_cliente) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request()
                        .input('id_cliente', sql.Int, id_cliente)
                        .query(sqlQueries.eventbyId);
        return oneEvent.recordset;                
    } catch (error) {
        return error.message;        
    }
}

const createEvent = async(eventData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('primeiro_nome', sql.VarChar(50), eventData.primeiro_nome)
                            .input('ultimo_nome', sql.VarChar(50), eventData.ultimo_nome)
                            .input('email', sql.VarChar(50), eventData.email)
                            .input('sexo', sql.VarChar(50), eventData.sexo)
                            .input('cidade', sql.VarChar(50), eventData.cidade)
                            .input('codigo_pais', sql.VarChar(2), eventData.codigo_pais)
                            .input('empresa', sql.VarChar(50), eventData.empresa)
                            .input('id_profissao', sql.Int, eventData.id_profissao)
                            .input('etnia', sql.VarChar(50), eventData.etnia)
                            .input('nascimento', sql.Date, eventData.nascimento)
                            .query(sqlQueries.createEvent);
        return insertEvent.recordset;                    
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (id_cliente, eventData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('id_cliente', sql.Int, id_cliente)
                        .input('primeiro_nome', sql.VarChar(50), eventData.primeiro_nome)
                        .input('ultimo_nome', sql.VarChar(50), eventData.ultimo_nome)
                        .input('email', sql.VarChar(50), eventData.email)
                        .input('sexo', sql.VarChar(50), eventData.sexo)
                        .input('cidade', sql.VarChar(50), eventData.cidade)
                        .input('codigo_pais', sql.VarChar(2), eventData.codigo_pais)
                        .input('empresa', sql.VarChar(50), eventData.empresa)
                        .input('id_profissao', sql.Int, eventData.id_profissao)
                        .input('etnia', sql.VarChar(50), eventData.etnia)
                        .input('nascimento', sql.Date, eventData.nascimento)
                        .query(sqlQueries.updateEvent);
        return update.recordset;                
        
    } catch (error) {
        return error.message;
    }
}    

const deleteEvent = async(id_cliente) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleted = await pool.request()
                            .input('id_cliente', sql.Int, id_cliente)
                            
                            .query(sqlQueries.deleteEvent);
        return deleted.recordset;                    
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getEvents,
    getById,
    createEvent,
    updateEvent,
    deleteEvent
}