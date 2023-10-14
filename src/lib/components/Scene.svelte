<script lang="ts">
  import { T} from '@threlte/core'
  import {AudioListener, Float, OrbitControls, PositionalAudio, Sky} from '@threlte/extras'
  import RamoPinkBump from '$lib/components/models/ramo_pink_bump.svelte'
  import BoccioloMetallic from '$lib/components/models/bocciolo_metallic.svelte';
	import { onMount } from 'svelte';
  let time = 0
  //function to gradually change time value from -3 to 3 and back
  const changeTime = () => {
    let interval = setInterval(() => {
      if (time < 3) {
        time += 0.001
      } else {
        clearInterval(interval)
        setTimeout(() => {
          let interval2 = setInterval(() => {
            if (time > -3) {
              time -= 0.001
            } else {
              clearInterval(interval2)
              changeTime()
            }
          }, 10)
        }, 1000)
      }
    }, 10)
  }
  onMount(()=>{
    changeTime()
  })
</script>
<Sky elevation={time} />
<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 8]}
  fov={50}

  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
>
  <AudioListener />
  <OrbitControls
    enablePan={true}
    enableZoom={true}
    enableDamping
    autoRotate={true}
    autoRotateSpeed={0.3}
  />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.5} position={[1, 5, -1]} castShadow/>

<T.Group
  rotation={[1.8, 2, 0]}
  position={[0, 0, 0]}
>
  <PositionalAudio
    autoplay
    refDistance={15}
    loop
    directionalCone={{
      coneInnerAngle: 50,
      coneOuterAngle: 180,
      coneOuterGain: 0.3
    }}
    src={'/audio/rocket.mp3'}
  />
  <RamoPinkBump
    receiveShadow
    scale={1}
  />
</T.Group>

<Float
  rotationSpeed={[2.15,2.5,-1.10]}
  rotationIntensity={3}
>
  <T.Group
  >
    <PositionalAudio
      autoplay
      refDistance={15}
      loop
      src={'/audio/tree.mp3'}
      directionalCone={{
        coneInnerAngle: 90,
        coneOuterAngle: 220,
        coneOuterGain: 0.3
      }}
    />
    <BoccioloMetallic
      castShadow
      rotation={[0, 0, 1.8]}
      position={[2.5, 2.5, 1]}
    />
  </T.Group>
</Float>