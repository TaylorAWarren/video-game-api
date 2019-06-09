'use strict'
const Game = use('App/Models/Game')
class GameController {
  async index({response}) {
    const games = await Game
    .query()
    .with('developer')
    .fetch();
    response.send(games)
  }
  async store({request, response}) {
    const game = request.only(['name', 'rating', 'developer_id'])
    await Game.create(game)
    const games = await Games.all()
    response.send(games)
  }
  async show({request, response}) {
    const game = await Game.find(request.params.id)
    response.send(game)
  }
  async update({request, response}) {
    const gameEdit = request.post()
    const game = await Game.find(request.params.id)
    game.name = gameEdit.name;
    game.rating = gameEdit.rating;
    await game.save()
    const games = await Game.all()
    response.send(games)
  }
  async destroy({request, response}) {
    const game = await Game.find(request.params.id)
    await game.delete()
    const games = await Game .all()
    response.send(games)
  }
}

module.exports = GameController
