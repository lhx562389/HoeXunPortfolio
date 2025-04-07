
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('console.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -199.067, 197.453]} rotation={[-1.57, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials['Glass_-_Heavy_Color']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Plastic_-_Textured_-_Regular']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Plastic_-_Translucent_Glossy_Blue']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Plastic_-_Translucent_Glossy_Gray']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Plastic_-_Translucent_Matte_Gray']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Plastic_-_Translucent_Matte_Gray_1']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Steel_-_Satin']} />
      </group>
    </group>
  )
}

useGLTF.preload('console.glb')
