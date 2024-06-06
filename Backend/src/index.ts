import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from 'hono'
import { IndexRouter } from './routes/index'

const app = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_secret  : string
    }
    Variables:{
        prisma: PrismaClient
    }
}>();

app.route('/api/v1',IndexRouter);

export default app
