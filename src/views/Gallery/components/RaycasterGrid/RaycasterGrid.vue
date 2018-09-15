<template>
  <div class="raycaster-grid">
    <div ref="three" class="three"/>
  </div>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three'
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
      // const gui = new dat.GUI()
      const scene = new THREE.Scene()
      const clock = new THREE.Clock()
      const camera = this.getCamera()
      const renderer = this.getRenderer()
      const controls = this.getOrbitControls(camera, renderer)
      const particles = this.getParticles(30, 20)
      const plane = this.getPlane(30)
      const box = this.getBox(2)
      const raycaster = this.getRaycaster()
      const axesHelper = new THREE.AxesHelper(100)
      // scene.add(axesHelper)
      scene.add(particles)
      scene.add(plane)
      // scene.add(box)
      window.addEventListener('mousemove', (event) => { this.onMouseMove(event, scene, camera, raycaster) }, false)
      const pixelRatio = window.devicePixelRatio || 0;
      // const composer = new THREE.EffectComposer(renderer);
      // composer.setSize(window.innerWidth * pixelRatio, window.innerHeight * pixelRatio);
      // const renderPass = new THREE.RenderPass(scene, camera);
      // composer.addPass(renderPass);
      // const rgbShiftShader = new THREE.ShaderPass(THREE.RGBShiftShader);
      // rgbShiftShader.uniforms['amount'].value = 0;
      // gui.add(rgbShiftShader.uniforms['amount'], 'value', 0, 0.1)
      // rgbShiftShader.renderToScreen = true;
      // composer.addPass(rgbShiftShader);
      this.update(renderer, scene, camera, clock, raycaster)
      return scene
    },
    getBox (size) {
      const geometry = new THREE.BoxGeometry(size, size, size)
      const material = new THREE.MeshBasicMaterial({color: 'red'})
      const mesh = new THREE.Mesh(geometry, material)
      mesh.name = 'box'
      return mesh
    },
    getPlane (size) {
      const geometry = new THREE.PlaneGeometry(size, size)
      const material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.name = 'plane'
      return mesh
    },
    getParticles (size, segments) {
      const particles = new THREE.Group()
      const plane = new THREE.PlaneGeometry(size, size, segments, segments)
      plane.vertices.forEach(vertex => {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
        const material = new THREE.MeshBasicMaterial({ color: 'black' })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.x = vertex.x
        mesh.position.y = vertex.y
        mesh.position.z = vertex.z
        particles.add(mesh)
      })
      particles.name = 'particles'
      return particles
    },
    getRaycaster () {
      var raycaster = new THREE.Raycaster()
      return raycaster
    },
    getOrbitControls (camera, renderer) {
      const OrbitControls = threeOrbitControls(THREE)
      const controls = new OrbitControls(camera, renderer.domElement)
      return controls
    },
    getCamera (size, segments) {
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
      camera.position.z = 50
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      return camera
    },
    getRenderer () {
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(this.$refs.three.offsetWidth, this.$refs.three.offsetHeight)
      renderer.shadowMap.enabled = true
      renderer.setClearColor('#f7f7f7')
      this.$refs.three.appendChild(renderer.domElement)
      return renderer
    },
    onMouseMove (event, scene, camera, raycaster) {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1
    },
    update (renderer, scene, camera, clock, raycaster) {
      renderer.render(scene, camera)
      // raycaster.setFromCamera(this.mouse, camera)
      // console.log(raycaster);
      // scene.getObjectByName('particles').children.forEach(particle => {
      //   const point = new THREE.Vector3()
      //   point.addVectors(raycaster.ray.origin, raycaster.ray.direction.multiplyScalar(1))
      //   var d = particle.position.distanceTo(point);
      //   if (point.x && d) {
      //     particle.position.x += particle.position.x * d * 0.001
      //   }
      // })
      raycaster.setFromCamera(this.mouse, camera)
      function updateParticles() {
        const intersects = raycaster.intersectObject(scene.getObjectByName('plane'))
        if ( intersects.length > 0 ) {
          scene.getObjectByName('particles').children.forEach((particle, index) => {
            const point = particle.position
            // point.z = 0
            const d = point.distanceTo(intersects[0].point)
            if (d < 13) {
              // particle.position.z = Math.pow((1 - (d/13)), 2) * 20
              TweenMax.to(particle.position, 1, {z: Math.pow((1 - (d/13)), 2) * 20, ease: Power4.easeOut})
            } else {
              // particle.position.z = Math.pow((1 - (d/13)), 2) * 20
              TweenMax.to(particle.position, 1, {z: 0, ease: Power4.easeOut})
            }
          })
        }
      }
      updateParticles()
      requestAnimationFrame(() => { this.update(renderer, scene, camera, clock, raycaster) })
    }
  }
}
</script>

<style lang="scss" scoped>
.raycaster-grid, .three {
  width: 100%;
  height: 100%;
  position: relative;
}
.raycaster-grid /deep/ canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
