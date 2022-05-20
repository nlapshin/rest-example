import model from './model.js'
import Service from './service.js'

const service = new Service(model)

export default {
  register(app) {
    app.get('/movie/list', async (req, res) => {
      const movies = await service.list()
  
      res.json({ success: true, data: { movies } })
    })

    app.get('/movie/search', async (req, res) => {
      const { query } = req
      const { name } = query

      const movies = name ? await service.searchByName(name) : await service.list()
  
      res.json({ success: true, data: { movies } })
    })

    app.get('/movie/:id', function(req, res) {
      const movie = service.findById(id)
  
      res.json({ success: true, data: { movie } })
    })
  
    app.post('/movie', async (req, res) => {
      const response = await service.add(req.body)

      if (response.success) {
        res.json({ success: true, data: { id: response.instance._id }})
      } else {
        res.json({ success: false, error: response.error })
      }
    })

    app.put('/movie', async (req, res) => {
      const response = await service.updateById(req.body.id, req.body.instance)

      if (response.success) {
        res.json({ success: true })
      } else {
        res.json({ success: false, error: response.error })
      }
    })


    app.delete('/movie', async (req, res) => {
      const response = await service.deleteById(req.body.id)

      res.json(response)
    })
  }
}
