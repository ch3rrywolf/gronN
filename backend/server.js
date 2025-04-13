const express = require('express')
const app = express()
const dotenv = require('dotenv')
const body_parser = require('body-parser')
const cors = require('cors')
const db_connect = require('./utils/db')
const pdfRoute = require('./routes/pdfRoutes')

dotenv.config()

app.use('/files', express.static('files'));
app.use(body_parser.json({ limit: '50mb' }));
app.use(body_parser.urlencoded({ limit: '50mb', extended: true }));

if (process.env.mode === 'production') {
    app.use(cors())
} else {
    app.use(cors({
        origin: "http://localhost:5173"
    }))
}

const port = process.env.port

app.use('/', require('./routes/authRoutes'))
app.use('/', require('./routes/pdfRoutes'))
app.use('/', require('./routes/dossierRoutes'))
app.use('/', require('./routes/commentRoutes'))
app.use('/', require('./routes/representantRoutes'))
app.use('/', require('./routes/benificaireRoutes'))

app.get('/', (req, res) => res.send('Hello Glob-G'))

db_connect()

app.listen(port, () => console.log(`server is running on port ${port}!`))