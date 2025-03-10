export default function useLayout(pathname : string){
    if(pathname == '/') return 'About Me';
    if(pathname == '/resume') return "Resume";
    if(pathname == '/contact') return 'Contact';
    if(pathname == '/portafolio') return "Portafolio"
    if(pathname.includes('/portafolio')) return "Portafolio"
    return "Blog";
}
