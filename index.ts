import express from 'express';
import router from './routers/cartRouter';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/cart', router);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})

