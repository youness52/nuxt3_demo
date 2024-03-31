
<template>
  <NuxtLayout>
    <Head>
      <title>NUXT CRUD APP</title>
    </Head>
    <navbar :loggedInUser="loggedInUser"  />
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      loggedInUser: ''
    }
  },
  methods: {
    handleUserLoggedIn(user) {
      this.loggedInUser = user;
    }
  }
}
</script>