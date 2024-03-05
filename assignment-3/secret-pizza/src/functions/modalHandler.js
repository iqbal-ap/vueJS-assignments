import { ref } from 'vue';

const menu = ref(null);

function addMenu(item) {
    menu.value = item;
    console.log('menu:', menu);
}

export default {
    menu,
    addMenu
}