<script lang="ts">
  import { T} from '@threlte/core'
  import {AudioListener, Float, OrbitControls, PositionalAudio, Sky} from '@threlte/extras'
  import RamoPinkBump from '$lib/components/models/ramo_pink_bump.svelte'
  import BoccioloMetallic from '$lib/components/models/bocciolo_metallic.svelte';
	import { onMount } from 'svelte';
  let elevation = 2
  let azimuth = 180
  //function to gradually change elevation value from -5 to 90 and back
  const changeTime = () => {
    let interval = setInterval(() => {
      if (elevation < 5) {
        elevation += 0.001
      } else {
        clearInterval(interval)
        setTimeout(() => {
          let interval2 = setInterval(() => {
            if (elevation > -5) {
              elevation -= 0.001
            } else {
              clearInterval(interval2)
              changeTime()
            }
          }, 10)
        }, 1000)
      }
    }, 10)
  }
  //function to gradually change azimuth value from -180 to 180 and back
  const changeAzimuth = () => {
    let interval = setInterval(() => {
      if (azimuth < 180) {
        azimuth += 0.001
      } else {
        clearInterval(interval)
        setTimeout(() => {
          let interval2 = setInterval(() => {
            if (azimuth > -180) {
              azimuth -= 0.001
            } else {
              clearInterval(interval2)
              changeAzimuth()
            }
          }, 10)
        }, 1000)
      }
    }, 10)
  }
  onMount(()=>{
    changeTime()
    changeAzimuth()
  })
</script>
<Sky {elevation} {azimuth}/>
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

<T.DirectionalLight intensity={1} position={[1, 5, -1]} castShadow/>

<T.Group
  rotation={[1.8, 2, 0]}
  position={[0, 0, 0]}
>
  <PositionalAudio
    autoplay
    refDistance={15}
    loop
    volume={0.8}
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
      volume={0.8}
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