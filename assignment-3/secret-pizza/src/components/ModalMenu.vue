<script setup>
import * as ModalHandler from '../functions/modalHandler.js';
import * as Repository from '../functions/repository.js';
const menu = ModalHandler.default.menu;

function submitForm() {
  const id = menu.value?.id;
  const title = document.getElementById('menu-title').value;
  const price = Number(document.getElementById('menu-price').value);
  let imgSrc = document.getElementById('menu-img').value;
  let description = document.getElementById('menu-desc').value;

  try {
    if (!id) {
      const imgSrcRegex = /\.(jpeg|jpg|gif|png|webp)$/i;
      const isValidimgSrc = imgSrcRegex.test(imgSrc);

      if (!imgSrc || !isValidimgSrc) {
        imgSrc = 'src/assets/media/menu-pizza-tomato-unsplash.jpg';
      }

      if (!description) {
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pellentesque nulla nec placerat.';
      }

      Repository.default.createMenu({
        title,
        imgSrc,
        description,
        price,
      })
    } else {
      Repository.default.updateMenuById(id, {
        title,
        imgSrc,
        description,
        price,
      })
    }

    alert('Successfully save changes!')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
    <!-- Modal -->
    <div class="modal fade text-light" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{{ menu?.title ? 'Edit Menu' : 'Add Menu' }}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" @submit="submitForm">
                <div class="col-md-6">
                    <label for="menu-title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="menu-title" placeholder="Enter Menu's Title" :value="menu?.title" required>
                </div>
                <div class="col-md-6">
                    <label for="menu-price" class="form-label">Price</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">$</span>
                      <input type="text" class="form-control" id="menu-price" placeholder="Enter Menu's Price" :value="menu?.price" aria-describedby="basic-addon1" required>
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="menu-img" class="form-label">Source Image</label>
                    <textarea type="text" class="form-control" id="menu-img" placeholder="Enter Menu's Source Image" :value="menu?.imgSrc"></textarea>
                </div>
                <div class="col-md-12">
                    <label for="menu-desc" class="form-label">Description</label>
                    <textarea type="text" class="form-control" id="menu-desc" placeholder="Enter Menu's Description" :value="menu?.description"></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-warning">{{ menu?.title ? 'Save changes' : 'Submit' }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</template>