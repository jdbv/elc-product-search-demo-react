import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import productsRoutes from './api/routes/products.routes';

const PORT = 3400;
// Create global app object
const app = express();

// Set various HTTP headers to help protect your app.
app.use(helmet());

// Allow CORS
var allowedOrigins = [
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true)
    };

    if(!allowedOrigins.includes(origin)){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}))

// Serve images, CSS files, HTML and JavaScript files in a directory named public.
app.use('/static', express.static(path.join(__dirname, '../public')));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/static/index.html');
});

app.use('/products', productsRoutes);

// Port Config
app.listen(PORT, () => console.log('Listening on port: ', PORT));

export default app;
