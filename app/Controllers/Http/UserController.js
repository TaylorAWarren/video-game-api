'use strict'

const User = use('App/Models/User')

class UserController {
  async login({auth, request}) {
    const {email,password} = request.all()
    // const request = request.all()
    // const email = request.email
    // const password = request.password
    console.log(email)
    return await auth.attempt(email, password)
  }

  async create({request, response}) {
    const {username, email, password} = request.all()
    const createdUser = await User.create({username, email, password})
    response.status(201).send(createdUser)
  }
}

module.exports = UserController
