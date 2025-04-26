import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/cadastro', async (req, res) => {
    const user = req.body 

    await prisma.user.create ({
        data: {
            email: email,
            name: name,
            password
        }
    })
        
    

    res.status(201).json(user)
})

export default router