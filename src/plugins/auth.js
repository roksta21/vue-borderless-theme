export default {
  install(Vue) {
    Vue.auth = {
      getToken() {
        return localStorage.getItem(`${process.env.VUE_APP_STORAGE_PREFIX}_token`);
      },

      hasToken() {
        if (this.getToken() == null) {
          return false;
        }
        if (this.getToken().length == 0) {
          return false;
        }

        return true;
      },

      setToken(token) {
        localStorage.setItem(`${process.env.VUE_APP_STORAGE_PREFIX}_token`, token);
      },

      removeToken() {
        localStorage.removeItem(`${process.env.VUE_APP_STORAGE_PREFIX}_token`);
      }
    };

    Object.defineProperties(Vue.prototype, {
      $auth: {
        get() {
          return Vue.auth;
        }
      }
    });
  }
};
