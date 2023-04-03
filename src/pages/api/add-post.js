import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  try{
    const newPage = await prisma.post.create({
      data: {
        title: req.body.title,
        language_id: req.body.category,
        content: req.body.content,
        slug: req.body.slug
      }
    })
    
    res.status(200).json({ 
      post: newPage
    })

  } catch(e){
    res.status(400).json({ 
      error: e
    })
    console.log('Error!', e)
  }
}