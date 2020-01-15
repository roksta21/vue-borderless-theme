<template>
  <div class="bg-light-blue">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="text-center">
                <img src="/user.png" alt="user" height="100px" />
              </div>
              <h4 class="mt-4">Recover Password</h4>
              <div v-if="! email_sent">
                <p>Enter your email to reset your password</p>
                <form @submit.prevent="send" class="my-4">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="form-group text-right">
                    <button class="btn btn-primary">Send</button>
                  </div>
                </form>
              </div>
              <div v-if="email_sent" class="alert alert-info">
                <p>An email has been sent to {{ email }}. Click the link to recover your account.</p>
              </div>
              <router-link :to="{ name: 'login' }">Login</router-link>
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
      email: '',
      email_sent: false
    }
  },

  methods: {
    send() {
      this.email_sent = true
    }
  }
}
</script>