export const showPage = (req, res) => {
  //res.send(req.url + ' : ' + req.params.page)
  res.sendFile(process.env.PWD + '/app/views/index.html')
}
