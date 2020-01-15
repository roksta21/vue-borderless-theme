<template>
  <div>
    <main-menu />
    <nav-bar />

    <!-- begin::main content -->
    <main class="main-content">
      <div class="container">
        <router-view />
      </div>
    </main>
    <!-- end::main content -->
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import NavBar from '@/components/NavBar'

export default {
  components: {
    MainMenu, NavBar
  }
}
</script>