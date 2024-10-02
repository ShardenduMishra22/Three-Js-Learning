import * as Three from "three"

// Step 1 - add a scene
const scene = new Three.Scene()
scene.background = new Three.Color("#0d1b2a") // Dark blue background

// Step 2 - add a camera
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// Step 3 - create a geometry
const geometry = new Three.BoxGeometry()
const material = new Three.MeshLambertMaterial({
    color: "#8b54a3",    // Soft metallic gray
    emissive: "#2a6f97", // Light blue emissive glow
    flatShading: true
})

// Mesh has 2 material geometry and material
const cuber = new Three.Mesh(geometry, material)

// Add the cube to the scene
scene.add(cuber)

// Step 4 - add lighting
const light = new Three.DirectionalLight("#ffffff", 0.8) // Soft white light
light.position.set(1, 1, 1)
scene.add(light)

// Step 5 - Set up the renderer
const renderer = new Three.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Step 6 - animate
function animate() {
    requestAnimationFrame(animate)
    cuber.rotation.x += 0.01
    cuber.rotation.y += 0.01
    renderer.render(scene, camera)
}

// Call the animate function
animate()
