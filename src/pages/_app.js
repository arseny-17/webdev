import '@/styles/globals.scss'
import '@/styles/admin.css'
import Layout from '@/components/Layout'
import footerStyles from '@/components/Footer/Footer.scss'
import headerStyles from '@/components/Header/Header.scss'
import contentSidebarStyles from '@/components/ContentSidebar/ContentSidebar.scss'
import mobileMenuStyles from '@/components/MobileMenu/MobileMenu.scss'
import bannerStyles from '@/components/Banner/Banner.scss'
import breadcrumbsStyles from '@/components/Breadcrumbs/Breadcrumbs.scss'


export default function MyApp ({Component, pageProps}) {

  return (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
  )
}

