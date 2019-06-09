'use strict'

/*
|--------------------------------------------------------------------------
| GameSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const games = [
  {
    name: "Halo 2",
    rating: 10,
    developer_id: 1
  },
  {
    name: 'Minecraft',
    rating: 9,
    developer_id: 3
  },
  {
    name: 'Shrek 2',
    rating: 2,
    developer_id: 3
  },
  {
    name: "Black Ops 2",
    rating: 7,
    developer_id: 2
  },
  {
    name: "League of Legends",
    rating: 6,
    developer_id: 1
  }
]

class GameSeeder {
  async run () {
    const savedGames = games.map(async game => {
      await Factory.model('App/Models/Game').create(game)
    })
    await Promise.all(savedGames)
  }
}

module.exports = GameSeeder
