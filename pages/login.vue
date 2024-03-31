<template>
  <div class="container">
    <h1 class="text-center">Login Page</h1>
    <form class="p-5" @submit.prevent="login">
      <div class="form-group">
        <label for>Email</label>
        <input type="email" name class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label for>Password</label>
        <input type="password" name class="form-control" v-model="password" />
      </div>
      <br>
      <button type="submit" class="btn btn-primary">login</button>
    </form>
   
  </div>
</template>

<script>

import Swal from "sweetalert2";


export default {
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
         login(){
          useNuxtApp().$axiosApi.post('/user/login',{
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          //console.log(response.data.user)
          if (response.data.status == true) {
           
            localStorage.setItem("apiToken",response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
            window.location="/"
            //this.$router.push("/");
            //this.$router.go();
          } else {
            if (response.data.message) {
                //console.log(response.data.message)
              Swal.fire("error!", response.data.message, "error");
            }
          }
        });


        }


    },
};
</script>

<style lang="scss" scoped>
</style>