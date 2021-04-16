const sidebar = document.querySelector('.sidebar');
const getQuote = document.querySelector('.getQuote')
const openSidebar = document.querySelector('.open-sidebar')
const get_quote_button = document.querySelector('.get_quote');
const closeSidebar = document.querySelector('.close-sidebar')
const header = document.querySelector('header')

const headerClasslist = ['bg-white','!text-aqua']

const get_quote_classlist = ['border-aqua','hover:bg-aqua','hover:text-white']
window.addEventListener("scroll", (e) => {
    if (scrollY >= 2 * header.clientHeight) {
      header.classList.add(...headerClasslist);
      get_quote_button.classList.add(...get_quote_classlist)
    } else {
      get_quote_button.classList.remove(...get_quote_classlist)
      header.classList.remove(...headerClasslist);
    }
  });
openSidebar.onclick = () =>{
   (innerWidth > 768) &&  getQuote.classList.toggle('-translate-x-48')
   openSidebar.classList.add('hidden')
    sidebar.classList.toggle('translate-x-full')
}
closeSidebar.onclick = () =>{
    openSidebar.classList.remove('hidden')
    getQuote.classList.remove('-translate-x-48')
    sidebar.classList.add('translate-x-full')
}