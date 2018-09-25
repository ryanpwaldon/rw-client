<template>
  <div class="raycaster-grid">
    <div ref="three" class="three"/>
  </div>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three-full'
// import * as dat from 'dat.gui';
import * as threeOrbitControls from 'three-orbit-controls';
import { TweenMax, Elastic } from 'gsap/all';
import _ from 'lodash';
export default {
  data () {
    return {
      mouse: {}
    }
  },
  mounted () {
    const scene = this.init()
  },
  methods: {
    init () {
      const scene = new THREE.Scene()
      // scene.fog = new THREE.FogExp2('black', 0.05)
      const cube = this.createCube(1, 1, 1)
      const plane = this.createPlane(100)
      const pointLight1 = this.createPointLight(0.5)
      const pointLight2 = this.createPointLight(0.5)
      const ambientLight = this.createAmbientLight(0.5)
      const path = '/env-map/'
      const format = '.jpg'
      const urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
      ];
      const cubeReflection = new THREE.CubeTextureLoader().load(urls);
      cubeReflection.format = THREE.RGBFormat;
      scene.background = cubeReflection;
      cube.material.envMap = cubeReflection
      plane.material.envMap = cubeReflection
      cube.position.y = 2
      plane.rotation.x = Math.PI/2
      pointLight1.position.y = 5
      pointLight2.position.z = 100
      pointLight2.position.x = -100
      pointLight2.position.y = 5

      var loader = new THREE.GLTFLoader()
      // THREE.DRACOLoader.setDecoderPath('/lib/draco/')
      // loader.setDRACOLoader(new THREE.DRACOLoader())
      loader.load(('/models/lock.gltf'),
        gltf => {
          console.log(gltf)
          scene.add(gltf.scene)
        },
        xhr => {
          console.log(xhr.loaded / xhr.total * 100 + '% loaded')
        },
        error => {
          console.log(error)
          console.log('An error happened')
        }
      )

      scene.add(cube)
      scene.add(plane)
      scene.add(pointLight1)
      scene.add(pointLight2)
      scene.add(ambientLight)
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
      camera.position.z = -10
      camera.position.x = -10
      camera.position.y = 10
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setClearColor('black')
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.shadowMap.enabled = true
      this.$refs.three.appendChild(renderer.domElement)
      const OrbitControls = threeOrbitControls(THREE)
      const controls = new OrbitControls(camera, renderer.domElement)
      this.update(renderer, scene, camera)
      const tl = new TimelineMax({ repeat: -1 ,repeatDelay: 0.5 })
        .to(cube.scale, 0.5, {x: 2, ease: Expo.easeOut})
        .to(cube.scale, 0.5, {z: 2, ease: Expo.easeOut})
        .to(cube.scale, 0.5, {y: 2, ease: Expo.easeOut})
        .to(cube.rotation, 0.5, {y: Math.PI/2, ease: Expo.easeOut})
        .to(cube.scale, 0.5, {x: 1, y: 1, z: 1, ease: Expo.easeOut}, '-=0.5')
      return scene
    },
    createCube (w, h, d) {
      const geometry = new THREE.BoxGeometry(w, h, d)
      const material = new THREE.MeshStandardMaterial({ color: 'white' })
      material.roughness = 0.5
      // material.metalness = 0.5
      const mesh = new THREE.Mesh(geometry, material)
      mesh.castShadow = true
      return mesh
    },
    createPlane (size) {
      const geometry = new THREE.PlaneGeometry(size, size, 100, 100)
      const material = new THREE.MeshStandardMaterial({ color: 'white', side: THREE.DoubleSide, wireframe: true })
      // material.roughness = 0.5
      material.metalness = 0.5
      const mesh = new THREE.Mesh(geometry, material)
      mesh.receiveShadow = true
      return mesh
    },
    createPointLight (intensity) {
      const light = new THREE.PointLight('white', intensity)
      light.castShadow = true
      light.shadow.bias = 0.001;
      light.shadow.mapSize.width = 2048;
      light.shadow.mapSize.height = 2048;
      return light
    },
    createAmbientLight (intensity) {
      const light = new THREE.AmbientLight('white', intensity)
      return light
    },
    update (renderer, scene, camera) {
      renderer.render(
        scene,
        camera
      )
      requestAnimationFrame(() => {
        this.update(renderer, scene, camera)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.raycaster-grid, .three {
  width: 100%;
  height: 800px;
  position: relative;
}
.raycaster-grid /deep/ canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
