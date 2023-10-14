<script lang="ts">
  import { T } from '@threlte/core'
  import { Float, OrbitControls } from '@threlte/extras'
  import RamoPinkBump from '$lib/components/models/ramo_pink_bump.svelte'
  import BoccioloMetallic from '$lib/components/models/bocciolo_metallic.svelte';
</script>

<T.PerspectiveCamera
  makeDefault
  position={[8, 0, 8]}
  on:create={({ ref }) => {
    ref.lookAt(0, 10, 0)
  }}
>
    <OrbitControls
    enablePan={true}
    enableZoom={true}
    enableDamping
    
  />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.5} position={[1, 5, -1]} castShadow/>

<RamoPinkBump
  receiveShadow
  scale={1}
  rotation={[1.8, 0, 0]}
  position={[0, 0, 0]}
/>

<Float
  rotationSpeed={[1.15,1.5,-1.10]}
  rotationIntensity={8}
>
  <BoccioloMetallic
    castShadow
    position={[0, 2.5, 0]}
  />
</Float>

