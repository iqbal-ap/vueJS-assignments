<script setup>
import * as Repository from '../functions/repository.js';

function submitForm() {
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const bookingDateTime = document.getElementById('input-datetime').value;
    const [bookingDate, bookingTime] = bookingDateTime.split('T');
    const numOfPeople = Number(document.getElementById('input-num-of-people').value);
    const requests = document.getElementById('input-special-req').value;
    
    try {
        Repository.default.createBooking({
            name,
            email,
            bookingDate,
            bookingTime,
            numOfPeople,
            requests
        })

        alert('Successfully book a reservation!')
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <main>
        <div class="container-md bg-dark mt-3 p-3 rounded-3" data-bs-theme="dark">
            <h1 class="text-center text-light">Online Reservation</h1>
            <div class="d-flex flex-wrap">
                <div class="flex-row p-2">
                    <img class="img-fluid flex-shrink-0 border-0" style="height: 300px;"
                    src="../assets/media/banner-dinner-unsplash.jpg" alt="...">
                </div>
                <div class="col-6 text-light p-2">
                    <form class="row g-3" @submit="submitForm">
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="input-name" placeholder="Your Name" required>
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" id="input-email" placeholder="Your Email" required>
                        </div>
                        <div class="col-md-6">
                            <input type="datetime-local" class="form-control" id="input-datetime" required>
                            <small>Office hours are 10am to 21pm</small>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control" id="input-num-of-people" placeholder="No. Of People" min="1">
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control" placeholder="Your Special Request" id="input-special-req" style="height: 100px"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-outline-warning">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>