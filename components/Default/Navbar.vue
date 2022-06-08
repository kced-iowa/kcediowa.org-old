<template>
  <div>
      <div class="navbar">
          <div class="navbar-item">
              <span>SADC</span>
          </div>
          <div class="navbar-item">
              <ul>
                  <li><NuxtLink to="/">Home</NuxtLink></li>
                  <span> | </span>
                  <li><NuxtLink to="/about">About</NuxtLink></li>
                  <span> | </span>
                  <li><NuxtLink to="/orgs">Clubs & Organizations</NuxtLink></li>
                  <span> | </span>
                  <li><NuxtLink to="/business">Business</NuxtLink></li>
                  <span> | </span>
                  <li><NuxtLink to="/visit">Visit</NuxtLink></li>
                  <span> | </span>
                  <li><NuxtLink to="/contact">Contact</NuxtLink></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<style>
    .navbar {
        z-index: 9999;
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 2vh;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .navbar-item {
        color: #fff;
    }
    .navbar-item ul {
        list-style: none;
    }
    .navbar-item li {
        display: inline;
    }
    .navbar-item li a {
        text-decoration: underline;
        color: #fff;
    }
    .navbar-item li a:hover {
        color: #2aa9af;
        transition: all 0.2s ease;
    }
</style>