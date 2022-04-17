const files = require('../middlewares/upload.middleware')

export const root = (req, res) => {
  res.send('upload: ' + files.storage())
}
