const app = require('./app')
//utilisant les variable d env
const port = process.env.APP_PORT
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})