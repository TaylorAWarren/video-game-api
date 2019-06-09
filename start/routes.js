'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')
const Games = use('App/Models/Game')
const Developer = use('App/Models/Developer')

Route.get('/', async () => {
  return {
    greeting: 'Welcome to our video game database!',
    gamesListUrl: '/games',
    gameById: '/game/:id'
  }
})

Route.get('/developers', async ({ response }) => {
  const developers = await Developer.all();
  response.send(developers);
})

Route.resource('games', 'GameController')

// Route.get('/games', 'GameController.index')

// Route.get('/game/:id', 'GameController.show')

// Route.post('/games', 'GameController.store')

// Route.put('/game/:id', 'GameController.update')

// Route.delete('/game/:id', 'GameController.destroy')