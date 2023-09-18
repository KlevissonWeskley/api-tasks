import { app } from './src/app.js'
import 'dotenv/config'

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log('HTTP Server Running!')
})