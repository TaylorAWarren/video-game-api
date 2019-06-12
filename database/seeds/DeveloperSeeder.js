'use strict'

/*
|--------------------------------------------------------------------------
| DeveloperSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')
const developers = [
  {
    name: "Bungee"
  },
  {
    name: 'Treyarch'
  },
  {
    name: 'Mojang'
  }
]

class DeveloperSeeder {
  async run () {
    const savedDevelopers = developers.map(async developer => {
      await Factory.model('App/Models/Developer').create(developer)
    })
    await Promise.all(savedDevelopers)
  }
}

module.exports = DeveloperSeeder
