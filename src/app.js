import express from "express";
import config from './config';
import productsRoutes from './routes/product.routes';



const app = express()

// let port = 6000;

// settings
app.set('port', config.port || 3000)


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productsRoutes)

export default app