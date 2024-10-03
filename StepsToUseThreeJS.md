# Steps to Create a 3D Scene in Three.js 

1. **Add a Scene:**
   - The scene is like the stage where everything will exist. Set a background color to give it a specific look, like space or a plain color.

2. **Add a Camera:**
   - The camera controls the viewpoint. Define the field of view, aspect ratio, and how close or far objects can be seen. Position the camera so it can see the object clearly.

3. **Add Light:**
   - Lighting is crucial to make objects visible. A directional light can shine on objects from an angle, creating shadows and giving depth to the scene.

4. **Add Geometry:**
   - Geometry is the shape of the object (e.g., a cube, sphere, etc.). Combine it with a material that defines its appearance—like color, texture, or shine.

5. **Render the Scene:**
   - The renderer processes everything and displays it on the screen. Ensure it’s set to the size of the display area.

6. **Animate:**
   - Animation brings the object to life. Rotate or move the object continuously to add motion, making the scene dynamic.



<!-- ////////////////////////////////////////////////////////// -->

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
