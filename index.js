const express = require('express')
const app = express()
const port = 8001

const create_accounts = "CREATE TABLE accounts (user_id serial PRIMARY KEY);"
const get_accs = "SELECT * FROM accounts;"

const { Client } = require('pg')

const client = new Client({
    host: 'postgres',
    user: 'postgres',
    password: 'password123',
    database: 'dockerdb',
    port: 5432
})
client.connect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/setup', (req, res) => {
    /*
    const client = new Client({
        host: 'postgres',
        user: 'postgres',
        password: 'password123',
        database: 'dockerdb',
        port: 5432
    })
    client.connect().then(response => {
        client.query(create_accounts).then(response => {
            console.log('create successful? ', response)
            client.query(get_accs).then(response => {
                console.log('get succ: ', response)
            })
        })
    })
    */
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
