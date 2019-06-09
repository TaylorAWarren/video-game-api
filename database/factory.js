'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Game', async (faker, i, data) => {
  return {
    name: data.name,
    rating: data.rating,
    developer_id: data.developer_id
  }
})

Factory.blueprint('App/Models/Developer', async (faker, i, data) => {
  return {
    name: data.name
  }
})
