<script lang="ts">
  import { T } from '@threlte/core'
  import { Float, OrbitControls } from '@threlte/extras'
  import Ramo_01_rotto_animaz from '$lib/components/models/ramo_01_rotto_animaz.svelte'
  import BoccioloMetallic from '$lib/components/models/bocciolo_metallic.svelte';
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 0, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
>
    <OrbitControls
    enablePan={false}
    enableZoom={true}
    enableDamping
    
  />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.5} position={[0, 5, -1]} castShadow/>

<Ramo_01_rotto_animaz
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

