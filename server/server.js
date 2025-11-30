import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import { auth } from './middlewares/auth.js';


const app = express();
await connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware())



app.get('/', (req, res) => res.send('Server is Live!'))

// routes after this is only accessible if the user is authenticated
app.use(requireAuth());
app.use(auth)

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});