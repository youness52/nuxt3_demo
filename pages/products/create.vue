<template>
  <div>
    <h2 class="text-center mt-5 mb-3">Create New Project</h2>
    <div class="card">
      <div class="card-header">
        <NuxtLink class="btn btn-outline-info float-right" to="/products">View All Projects</NuxtLink>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="name" id="name" name="name" />
          </div>

          <button
            @click="handleSave()"
            
            type="button"
            class="btn btn-outline-primary mt-3"
          >Save Project</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
   definePageMeta({ middleware: 'auth' })
</script>
<script>

import Swal from "sweetalert2";

export default {
  data() {
    return {
      name:''
    }
  },
  methods: {
    handleSave() {
      useNuxtApp().$axiosApi.post("/categories/save", {
     name: this.name 
  });
  this.name = "";
  Swal.fire({
    icon: "success",
    title: "categorie saved successfully!",
    showConfirmButton: false,
    timer: 1500
  });
  navigateTo('/products');
}
  },
}
</script>

<style lang="scss" scoped>
</style>







