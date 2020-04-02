<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #005082">
    <router-link
      to="/"
      tag="a"
      class="navbar-brand">
      CVŞELİM
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/personal-details"
          tag="li"
          class="nav-item">
          <a class="nav-link">Personal Details</a>
        </router-link>
        <router-link
          active-class="active"
          to="/personal-history"
          tag="li"
          class="nav-item">
          <a class="nav-link">Personal History</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
