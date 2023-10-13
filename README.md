# Sveltekit + Threlte studies

- [Sveltekit](https://kit.svelte.dev/)
- [Threlte](https://github.com/threlte/threlte)

## Setup the project

#### Clone the repository

```bash
git clone https://github.com/fcastrovilli/3dtesting.git
```

#### Install Dependencies

```bash
cd ./3dtesting
npm install
```

#### Run the app

```bash
npm run dev
```

## Convert GLTF/GLB 3D files

Place your models in `src/static/models` and run the following command to generate usable Svelte components (outputs will be found in `src/lib/components/models`).

```bash
npm run model-pipeline:run
```

#### Using GLTF/GLB you can export the following:

- Meshes
- Materials (Principled BSDF) and Shadeless (Unlit)
- Textures
- Cameras
- Punctual lights (point, spot, and directional)
- Animation (keyframe, shape key, and skinning)

> [!IMPORTANT]  
> Sometimes your textures will not be exported correctly. Make sure to follow the export reccomandations provided in [this video](https://youtu.be/PIpCl6TYnC0?si=3Vs85gjGKIFDl768). If you want to try your fresh export, you can use [this online viewer](https://gltf-viewer.donmccurdy.com/).