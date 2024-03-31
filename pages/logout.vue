<template>
    <div>
        
    </div>
</template>
<script setup>
   definePageMeta({ middleware: 'auth' })
</script>
<script>

    export default {
        mounted() {
           this.logout()
        },
        methods: {
    
    logout() {
      useNuxtApp().$axiosApi
        .get("/user/logout/")
        .then((response) => {
          console.log(response);
          localStorage.removeItem("apiToken");
          localStorage.removeItem("user");
          window.location="/login"
          //this.$router.push("/login");
        })
        .catch((error) => {
          
        });
    },
  },
    }
</script>

<style lang="scss" scoped>

</style>