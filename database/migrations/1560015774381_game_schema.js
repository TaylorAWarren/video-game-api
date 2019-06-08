'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameSchema extends Schema {
  up () {
    this.create('games', (table) => {
      table.increments()
      table.string('name', 255).notNullable().unique()
      table.decimal('rating',3, 1)
      table.timestamps()
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = GameSchema
