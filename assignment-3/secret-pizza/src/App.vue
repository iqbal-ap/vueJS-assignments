<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-dark" data-bs-theme="dark">
    <div class="container-md">
      <nav class="navbar navbar-expand-sm bg-dark">
        <div class="container-fluid">
          <RouterLink to="/" class="navbar-brand">Secret Pizza</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item align-middle">
                <RouterLink to="/" class="nav-link" active>Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/menu" class="nav-link">Menu</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/book-a-table" class="nav-link text-warning">Book A Table</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
#app {
  background-color: aliceblue;
}
</style>
