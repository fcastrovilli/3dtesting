<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  let start:boolean = false
</script>
{#if start}
  <Canvas>  
    <Scene />
  </Canvas>
{:else}
  <button class="start" on:click={()=>start=true}>Start</button>  
{/if}

<style>
  .start{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
  }
</style>