export async function main(app){
  app.get('/', async (req, res) => {
    res.sendFile('index.html');
  })

  app.post('/', async (req, res) => {
    res.sendFile('index.html');
  })

  app.delete('/', (req, res) => {

  })
};