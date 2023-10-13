<script lang="ts">
  import App from '$lib/components/App.svelte'
</script>

<div>
  <App />
</div>

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(8, 12, 21,1) 0%, rgb(0, 0, 0) 100%);
  }
</style>
