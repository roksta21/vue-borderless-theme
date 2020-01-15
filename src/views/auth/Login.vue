<template>
  <div class="bg-light-blue">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="text-center">
                <img src="/user.png" alt="user" height="100px">
              </div>
              <h4>Login</h4>
              <form @submit.prevent="login" class="my-4">
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="user.email" required>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" placeholder="Password" v-model="user.password">
                </div>
                <div class="form-group text-right">
                  <button class="btn btn-primary"><i class="fa fa-sign-in mr-2"></i> Login</button>
                </div>
              </form>
              <router-link :to="{ name: 'forgot-password' }">Forgot Password?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      this.$auth.setToken('token');
      window.location.href = '/'
    }
  }
}
</script>