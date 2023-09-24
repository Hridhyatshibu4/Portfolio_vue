<template>
  <div id="app">
    <nav>
      <!-- Navigation links -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/education">Education</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/volunteering">Volunteering</router-link>
      <router-link to="/certifications">Certifications</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Add styles for the App component */
</style>
