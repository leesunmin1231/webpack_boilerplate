export async function main(app){
  app.get('/', async (req, res) => {
    res.render('index', req.data);
  })

  app.post('/', async (req, res) => {
    res.render('index', req.data);
  })

  app.delete('/', (req, res) => {

  })
};