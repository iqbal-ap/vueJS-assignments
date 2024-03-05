<script setup>
</script>

<template>
  <img id="bootstrap-overrides" class="banner-pizza"
    src="../assets/media/banner-pizza-unsplash.jpg"
    alt="banner-pizza-unsplash.jpg">

  <main>
    <div class="container-md" data-bs-theme="dark">
      <div class="col-4 text-light text-banner shadow-lg rounded-3">
        <h1>Your most delicate one!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis luctus consequat. Integer nisi odio, lobortis non blandit ac, porta ac neque.</p>
        <button class="btn btn-outline-warning">
          <RouterLink to="/book-a-table" class="nav-link">Book A Table</RouterLink>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
#bootstrap-overrides.banner-pizza{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.text-banner {
  position: absolute;
  top: 30vh;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
