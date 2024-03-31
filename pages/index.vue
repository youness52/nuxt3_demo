<template>
  <div>
    <Head>
      <Title>Home page</Title>
    </Head>

    <p>{{ posts }}</p>

    <h1>
      <p>{{ $t('Homepage') }}</p>
    </h1>
    <div>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>
<script setup>
   definePageMeta({ middleware: 'auth' });
   

</script>
<script>
export default {
 

  data() {
    return {
      posts:[]
    }
  },
  mounted() {
   
    useNuxtApp().$axiosApi.get("/categories/list").then((response) => {
        this.posts = response.data.data;
        console.log(response);
      }).catch((error) => {
 
        if(error.response && error.response.status==401){
          const router = useRouter();
          router.push("/login");
        }

  });
 
  },
}
</script>



