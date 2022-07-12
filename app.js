const express = require('express')
const path = require('path')
const app = express()
const port = 3000

/* app.use(express.static(path.join(__dirname, 'public'))) */

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))
app.get('/ofertas', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'ofertas.html')))
app.get('/tiendasOficiales', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'tiendasOficiales.html')))
app.get('/vender', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'vender.html')))
app.get('/ayuda', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'ayuda.html')))
app.get('/creaTuCuenta', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'crearCuenta.html')))
app.get('/ingresá', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'ingresar.html')))
app.get('/misCompras', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'misCompras.html')))

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))