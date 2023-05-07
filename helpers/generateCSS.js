const fs = require('fs')
const sass = require('sass')

export default function getCSS() {

    let styleSheet = ''

    let global = sass.compileString(fs.readFileSync('./src/styles/globals.scss').toString()).css 
    let header = sass.compileString(fs.readFileSync('./src/components/Header/Header.scss').toString()).css 
    let footer = sass.compileString(fs.readFileSync('./src/components/Footer/Footer.scss').toString()).css
    let sidebar = sass.compileString(fs.readFileSync('./src/components/ContentSidebar/ContentSidebar.scss').toString()).css
    let mobileMenu = sass.compileString(fs.readFileSync('./src/components/MobileMenu/MobileMenu.scss').toString()).css 

    styleSheet = global + header + mobileMenu + sidebar + footer

    return styleSheet
}