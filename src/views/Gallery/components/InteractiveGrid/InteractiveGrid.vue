<template>
  <div class="interactive-grid">
    <div ref="three" class="three"/>
  </div>
</template>

<script>
import * as THREE from 'three'
// import * as dat from 'dat.gui';
import * as threeOrbitControls from 'three-orbit-controls'
export default {
  mounted () {
    this.scene = this.init()
  },
  methods: {
    init () {
      const scene = new THREE.Scene()
      const clock = new THREE.Clock()
      // const gui = new dat.GUI()
      const particles = this.getParticles(30, 60)
      particles.name = 'particles'
      particles.rotation.x = Math.PI / 2
      scene.add(particles)
      // gui.add(pointLight, 'intensity', 0, 10)
      // gui.add(pointLight.position, 'x', -20, 20)
      // gui.add(pointLight.position, 'y', -20, 20)
      // gui.add(pointLight.position, 'z', -20, 20)
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
      camera.position.y = 50
      camera.lookAt(
        new THREE.Vector3(0, 0, 0)
      )
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setClearColor('#f7f7f7')
      renderer.setSize(this.$refs.three.offsetWidth, this.$refs.three.offsetHeight)
      renderer.shadowMap.enabled = true
      this.$refs.three.appendChild(renderer.domElement)
      const OrbitControls = threeOrbitControls(THREE)
      this.controls = new OrbitControls(camera, renderer.domElement)
      this.update(renderer, scene, camera, clock)
      return scene
    },
    getParticles (size, segments) {
      const geometry = new THREE.PlaneGeometry(size, size, segments, segments)
      const material = new THREE.PointsMaterial({
        color: 'black',
        size: 0.2,
        transparent: false
        // blending: THREE.AdditiveBlending,
        // depthWrite: false
      })
      const points = new THREE.Points(geometry, material)
      return points
    },
    update (renderer, scene, camera, clock) {
      renderer.render(
        scene,
        camera
      )
      scene.getObjectByName('particles').geometry.vertices.forEach((vertex, index) => {
        vertex.z += Math.sin(clock.getElapsedTime() + index * 0.1) * 0.02
        // vertex.x += Math.cos(clock.getElapsedTime() + index * 0.1) * 0.1;
        // vertex.z += Math.cos(clock.getElapsedTime() + index * 0.1) * 0.1;
      })
      scene.getObjectByName('particles').geometry.verticesNeedUpdate = true
      requestAnimationFrame(() => {
        this.update(renderer, scene, camera, clock)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.interactive-grid, .three {
  width: 100%;
  height: 100%;
  position: relative;
}
.interactive-grid /deep/ canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
