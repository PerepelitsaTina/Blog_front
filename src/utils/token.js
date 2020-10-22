export default {
  key: 'token',
  get: function () {
    return localStorage.getItem(this.key);
  },
  set: function (data) {
    localStorage.setItem(this.key, data);
  }
};
