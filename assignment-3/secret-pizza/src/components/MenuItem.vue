<script setup>
import * as ModalHandler from '../functions/modalHandler.js';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  menuList: {
    type: Array,
    required: true,
    validator(val) {
      const isValid = val?.every((obj) => {
        return Object.prototype.hasOwnProperty.call(obj, 'id')
        && Object.prototype.hasOwnProperty.call(obj, 'title')
        && Object.prototype.hasOwnProperty.call(obj, 'imgSrc')
        && Object.prototype.hasOwnProperty.call(obj, 'description')
        && Object.prototype.hasOwnProperty.call(obj, 'price');
      })
      if (!isValid) {
        return false;
      }
      return true;
    }
  },
})
</script>

<template>
  <div class="row-sm mt-3" v-for="item in menuList" :key="item.id">
      <div class="card" style="max-width: 490px;">
          <div class="card-header">{{ item.title }}</div>
          <div class="row g-0">
              <div class="col-md-4">
                  <img :src="item.imgSrc"
                      class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <p class="card-text">{{ item.description }}</p>
                      <p class="card-text"><small class="text-body-secondary">${{ item.price }}</small></p>
                      <button @click="ModalHandler.default.addMenu(item)" type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
                          data-bs-target="#exampleModal">Edit</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
