<template>
  <nav class="navbar navbar-expand-lg shadow">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">Navbar</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" exact active-class="active">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about" exact active-class="active">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/products" exact active-class="active">Products</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login" exact active-class="active">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/logout" exact active-class="active">Logout</nuxt-link>
          </li>
          <!-- Add more menu items as needed -->
        </ul>
       
        <p>{{ user }}</p>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >Language</button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" @click="setLocale('en')">English</a>
            </li>
            <li>
              <a class="dropdown-item" @click="setLocale('fr')">French</a>
            </li>
            <!-- Add more language options as needed -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { setLocale } = useI18n();

</script>
<script>
export default {
  data() {
    return {
      user:process.client ? JSON.parse(localStorage.getItem('user')) || '' : ''
    }

  },
}
</script>

<style  >
.active {
  /* Your custom styles for active link */
  font-weight: bold;
}
</style>