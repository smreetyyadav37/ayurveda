import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function AyurvedicElements({ position = [0, 0, 0], scale = 1 }) {
  const group = useRef()
  const leaf1 = useRef()
  const leaf2 = useRef()
  const bottle = useRef()

  // Create a custom leaf shape
  const leafShape = new THREE.Shape()
  leafShape.moveTo(0, 0)
  leafShape.bezierCurveTo(0.5, 0.5, 1, 1, 0, 1.5)
  leafShape.bezierCurveTo(-1, 1, -0.5, 0.5, 0, 0)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (group.current) {
      group.current.rotation.y = time * 0.1
      group.current.position.y = Math.sin(time * 0.5) * 0.1
    }
    
    if (leaf1.current) {
      leaf1.current.rotation.x = Math.sin(time * 0.7) * 0.3
      leaf1.current.rotation.z = Math.cos(time * 0.5) * 0.2
    }
    
    if (leaf2.current) {
      leaf2.current.rotation.x = Math.cos(time * 0.6) * 0.3
      leaf2.current.rotation.z = Math.sin(time * 0.4) * 0.2
    }
    
    if (bottle.current) {
      bottle.current.rotation.y = time * 0.15
    }
  })

  return (
    <group ref={group} position={position} scale={scale} dispose={null}>
      {/* Leaf 1 - Custom shape */}
      <mesh ref={leaf1} position={[1, 0.5, 0]} rotation={[0.2, 0.5, 0.1]}>
        <extrudeGeometry args={[leafShape, { depth: 0.05, bevelEnabled: false }]} />
        <meshStandardMaterial 
          color="#6B8E23" 
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
          roughness={0.4}
        />
      </mesh>
      
      {/* Leaf 2 - Custom shape */}
      <mesh ref={leaf2} position={[-0.8, 0.6, 0.5]} rotation={[-0.3, -0.2, 0.2]}>
        <extrudeGeometry args={[leafShape, { 
          depth: 0.05, 
          bevelEnabled: false,
          scale: [0.8, 0.8, 1]
        }]} />
        <meshStandardMaterial 
          color="#556B2F" 
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
          roughness={0.5}
        />
      </mesh>
      
      {/* Ayurvedic bottle */}
      <group ref={bottle} position={[0, -0.2, 0]}>
        <mesh rotation={[0.1, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.3, 1.2, 32]} />
          <meshStandardMaterial 
            color="#D4A017" 
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial 
            color="#8B4513" 
            roughness={0.4}
          />
        </mesh>
      </group>
    </group>
  )
}