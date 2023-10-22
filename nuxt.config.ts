// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

//  app:{
//   head:{
//     link:[{rel:"stylesheet", href:"css/style.css"}],
//     script:[{src:"ja/jsfile.js"}]
//   }
//  }

css: [
  '~/assets/css/bootstrap.min.css',
  '~/assets/css/app.css',
  '~/assets/css/rtl.css',
],
app:{
  head:{
   link:[
    // { rel:"apple-touch-icon", sizes: '180x180', href: '/apple-touch-icon.png '},
    // { rel:"icon", type:"image/png" ,sizes:"32x32", href:"/favicon-32x32.png" },
    // { rel:"icon" ,type:"image/png" ,sizes:"16x16", href:"images/favicon-16x16.png" },
    { rel:"manifest", href:"/site.webmanifest" },
    { rel:"mask-icon", href:"images/safari-pinned-tab.svg", color:"#5bbad5" },
    { href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:wght@500;600&amp;display=swap", rel:"stylesheet" }
   ],
    script:[
      {src:"_nuxt/assets/js/lib/jquery.min.js"},
      {src:"_nuxt/assets/js/lib/svg4everybody.min.js"},
      {src:"_nuxt/assets/js/lib/owl.carousel.min.js"},
      {src:"_nuxt/assets/js/lib/jquery.nice-select.min.js"},
      {src:"_nuxt/assets/js/lib/apexcharts.min.js"},
      {src:"_nuxt/assets/js/lib/jquery.magnific-popup.min.js"},
      {src:"_nuxt/assets/js/charts.js"},
      {src:"_nuxt/assets/js/app.js"}
      
    ]
  }
}
 
})
