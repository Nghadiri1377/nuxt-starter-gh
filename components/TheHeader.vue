<template>
  <header>
    <div class="header">
          <form class="header__search"><input class="header__input" type="text" placeholder="Search" /><button class="header__start"><svg class="icon icon-search">
                <use xlink:href="img/sprite.svg#icon-search"></use>
              </svg></button></form><a class="header__logo" href="index.html"><img src="img/logo-sm.svg" alt="" /></a>
          <div class="header__group">
            <div class="header__item header__item_notifications"><button class="header__head active"><svg class="icon icon-notification">
                  <use xlink:href="img/sprite.svg#icon-notification"></use>
                </svg></button>
           
            </div>
            
           
            <a href="default.asp" target="_blank"> link</a>
            <a href="default.asp" target="_blank"> link</a>
            <a href="default.asp" target="_blank"> link</a>
          </div><a class="header__user" href="sign-in.html"><img src="img/ava-header.png" alt="" /></a><button class="header__toggle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M22 12H3" stroke="#11142d"></path>
              <g stroke="#808191">
                <path d="M22 4H13"></path>
                <path opacity=".301" d="M22 20H13"></path>
              </g>
              <path d="M7 7l-5 5 5 5" stroke="#11142d"></path>
            </svg></button>
        </div>
  </header>
</template>


<style>

/* unvisited link */
a:link {
  color: red;
  margin: 10px;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}
</style>


