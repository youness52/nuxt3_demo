<template>
  <div class="container">
    <h2 class="text-center mt-5 mb-3">category Manager</h2>

    <div class="card">
      <div class="card-header">
        <NuxtLink to="products/create" class="btn btn-outline-primary">Create New category</NuxtLink>
      </div>

      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th width="240px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{category.id}}</td>
              <td>{{category.name}}</td>
              <td>
                <NuxtLink
                  :to="`products/show/${category.id}`"
                  class="btn btn-outline-info mx-1"
                >Show</NuxtLink>
                <NuxtLink
                  :to="`products/edit/${category.id}`"
                  class="btn btn-outline-success mx-1"
                >Edit</NuxtLink>
                <button
                  @click="handleDelete(category.id)"
                  class="btn btn-outline-danger mx-1"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
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
      categories: []
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      useNuxtApp().$axiosApi
        .get("/categories/list")
        .then(response => {
          this.categories = response.data.data;
          console.log(response);
        })
        .catch(error => {
          if (error.response && error.response.status == 401) {
            const router = useRouter();
            router.push("/login");
          }
        });
    },
    handleDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.isConfirmed) {
          useNuxtApp().$axiosApi
            .get("/categories/delete/" + id)

            .then(response => {
              this.getCategories();
              Swal.fire({
                icon: "success",
                title: response.message,
                showConfirmButton: false,
                timer: 1500
              });
            })
            .catch(error => {
              Swal.fire({
                icon: "error",
                title: "An Error Occured!",
                showConfirmButton: false,
                timer: 1500
              });
              return error;
            });
        }
      });
    }
  }
};
</script>
