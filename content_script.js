const body = document.querySelector('body');
const style = document.createElement('style');
style.textContent = `
@media print {
  a[href]:after {content :"" !important;}
  abbr[title]:after {content:"" !important;}
  .site-page-wrapper > header,
  .site.site-sidebar,
  .site-sidebar-menu,
  footer {
    display: none;
  }
}
`;
body.appendChild(style);