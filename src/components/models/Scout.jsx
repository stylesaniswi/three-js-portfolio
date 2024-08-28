"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Scout(props) {
  const { nodes, materials } = useGLTF('/models/scout-transformed.glb');

  const modelRef =useRef()
  useFrame((state,delta,xrFrame)=>{

    modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.13;
  })
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0,-0.5,0]}
    scale={[1.3,1.3,1.3]}
    rotation={[0.25,0,0]}

    >
      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.model}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
      />
    </group>
  )
}

useGLTF.preload('/models/scout-transformed.glb')