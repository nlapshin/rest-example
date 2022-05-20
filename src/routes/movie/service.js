import validation from '../../validation/index.js'

export default class MovieService {
  constructor(model) {
    this.model = model
  }

  list() {
    return this.model.find()
  }

  searchByName(name) {
    return this.model.find({ name: { $regex: name }})
  }

  async add(instance) {
    try {
      const movie = new this.model(instance)
      const res = await movie.save()

      return { success: true, instance: res }
    } catch(error) {
      return { success: false, error: error }
    }
  }

  async updateById(id, instance) {
    try {
      await this.model.updateOne({ _id: id }, { $set: instance })

      return { success: true }
    } catch(error) {
      return { success: false, error: error }
    }
  }

  async deleteById(id) {
    try {
      await this.model.deleteOne({ _id: id })

      return { success: true }
    } catch(error) {
      console.log(error)
    
      return { success: false, error: error }
    }
  }
}
