<script setup>
import { computed } from 'vue';
import ModalMenu from '../components/ModalMenu.vue';
import MenuItem from '../components/MenuItem.vue';
import * as Repository from '../functions/repository.js';

const { menus } = Repository.default.getMenus();
const leftSideMenu = computed(() => menus.value?.filter((_, idx) => idx % 2 === 0));
const rightSideMenu = computed(() => menus.value?.filter((_, idx) => idx % 2 === 1));
</script>

<template>
  <main>
    <div class="container-md bg-dark mt-3 p-3 rounded-3" data-bs-theme="dark">
      <!-- Menu -->
      <div class="menu text-light">
        <h1 class="text-center">Our Most Beloved Items</h1>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Add Menu</button>
        </div>
        <div class="row">
          <!-- Left Column -->
          <div class="col-sm-6">
            <MenuItem :menuList="leftSideMenu"/>
          </div>
          <!-- Right Column -->
          <div class="col-sm-6">
            <MenuItem :menuList="rightSideMenu"/>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <ModalMenu />
    </div>
  </main>
</template>

<style scoped>
</style>
