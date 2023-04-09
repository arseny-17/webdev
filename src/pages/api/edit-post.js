import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  try{
    const editPost = await prisma.post.update({
      where: {
        id: parseInt(req.body.id),
      },
      data: {
          seo_title: req.body.seoTitle,
          seo_description: req.body.seoDescription,
          title: req.body.title,
          slug: req.body.slug,
          content: req.body.content,
          language_id: parseInt(req.body.category),
      }
    })
    
    res.status(200).json({ 
      post: editPost
    })

  } catch(e){
    res.status(400).json({ 
      error: e
    })
    console.log('Error!', e)
  }
}