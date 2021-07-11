<script>
export default {
  name: 'redirect',
  methods: {
    redirectToPage(routeName) {
      const pagePath = `/${routeName}`;
      if (this.$router.history.current.path !== pagePath) {
        this.$router.push({
          path: pagePath,
        });
      }
    },
  },
};
</script>
