
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function GuitarModel(props) {
  const { nodes, materials } = useGLTF('/dd_acoustic_guitar.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 345.938, -43.351]} rotation={[-0.356, 0.053, -0.159]} scale={100}>
        <mesh geometry={nodes.Plane_dark_brown_0.geometry} material={materials.dark_brown} />
        <mesh geometry={nodes.Plane_white_0.geometry} material={materials.white} />
        <mesh geometry={nodes.Plane_black_0.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_Material003_0.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_towers_0.geometry} material={materials.towers} />
        <mesh geometry={nodes.Plane_yellow_strung_0.geometry} material={materials.yellow_strung} />
        <mesh geometry={nodes.Plane_black_glossy_0.geometry} material={materials.black_glossy} />
      </group>
    </group>
  )
}

useGLTF.preload('/dd_acoustic_guitar.glb')
