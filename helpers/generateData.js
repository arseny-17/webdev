import getCSS from "./generateCSS"
import { PrismaClient } from '@prisma/client'
import renderCustomHTML from "./render"

export default async function generate(amp, slug){

    const prisma = new PrismaClient()
    const style = getCSS()
    const options = await prisma.options.findMany()
    const mainLink = options.find(x => x.key == 'mainLink').value
    const mainID = parseInt(options.find(x => x.key == 'mainPageID').value)
    const sitename = options.find(x => x.key == 'sitename').value

    const post = slug
      ? await prisma.post.findFirst({where: {slug: slug}})
      : await prisma.post.findUnique({where: {id: mainID}})

   if (!post) {
      return false
   }
 
    const category = await prisma.lang.findUnique({
       where: {
         id: post.language_id
       }
    })
 
    const menu = await prisma.menu.findUnique({
       where: {
         id: category.menu_id
       }
    })
 
    const rendered = await renderCustomHTML(post, amp, mainLink)
 
    const generatedProps = {
       mainLink: mainLink,
       mainID: mainID,
       post: JSON.parse(JSON.stringify(post)),
       menu: menu,
       rendered: rendered,
       ampStyle: style,
       amp: amp,
       sitename: sitename,
       slug: post.slug
    }
 
    return generatedProps
 
 }