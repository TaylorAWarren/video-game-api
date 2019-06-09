'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {
  developer() {
    return this.belongsTo('App/Models/Developer')
  }
}

module.exports = Game
