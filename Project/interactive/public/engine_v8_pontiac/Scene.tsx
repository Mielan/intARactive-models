/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Luis.Naves (https://sketchfab.com/Luis.Naves)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/engine-v8-pontiac-43e753f3230041da964feac60617be7a
title: ENGINE V8 PONTIAC
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
    mesh_1: THREE.Mesh
    mesh_2: THREE.Mesh
    mesh_3: THREE.Mesh
    mesh_4: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')