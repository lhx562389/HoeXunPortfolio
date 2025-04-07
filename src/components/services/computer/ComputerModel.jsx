
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF('/computerModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.007']} />
    </group>
  )
}

useGLTF.preload('/computerModel.glb')
