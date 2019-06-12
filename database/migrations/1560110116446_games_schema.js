'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GamesSchema extends Schema {
  up () {
    this.table('games', (table) => {
      // alter table
      table.integer('developer_id').unsigned().after('rating')
      table.foreign('developer_id').references('id').inTable('developers')
    })
  }

  down () {
    this.table('games', (table) => {
      // reverse alternations
      table.dropForeign('developer_id')
      table.dropColumn('developer_id')
    })
  }
}

module.exports = GamesSchema
