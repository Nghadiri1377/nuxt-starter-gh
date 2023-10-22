<template>
    <div class="sidebar">
        <div class="sidebar__head">
          <a class="sidebar__logo" href="index.html">
            <images class="sidebar__pic sidebar__pic_light" src="images/logo.svg" alt="" />
            <images class="sidebar__pic sidebar__pic_dark" src="images/logo-white.svg" alt="" />
          </a>
          <button class="sidebar__toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M22 12H3" stroke="#11142d"></path>
              <g stroke="#808191">
                <path d="M22 4H13"></path>
                <path opacity=".301" d="M22 20H13"></path>
              </g>
              <path d="M7 7l-5 5 5 5" stroke="#11142d"></path>
            </svg>
          </button>
          <button class="sidebar__close"><svg class="icon icon-close">
              <use xlink:href="images/sprite.svg#icon-close"></use>
            </svg>
          </button>
        </div>
        <h2>HOME</h2>
          <p class="p"><a href="#">home</a></p>
          <p class="p"> <a href="#">profile</a></p>

          <h2>contact</h2>
          <p class="p"><a href="#">about us</a></p>
          <p class="p"><a href="#">contact us</a></p>
      </div>
</template>


<style>
.p{
  margin-top: 30px;
}
</style>