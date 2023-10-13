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

Place your models in `src/static/models` and run the following command to generate usable Svelte (you will find output in `src/lib/components/models` folder).

```bash
npm run model-pipeline:run
```