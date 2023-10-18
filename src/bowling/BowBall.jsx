import { useAnimations, useGLTF } from "@react-three/drei";
import { Bolus } from "./Bolus";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Group } from "three";

export function BowBall(props) {
  const group = useRef();
  const ball = useRef()
  
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/bolus/bowling_ball.glb"
  );
  const { actions } = useAnimations(animations, group);
  const onHandleBall = () => {
    group.current.applyImpulse(
      {
        x: 10,
        y: 0,
        z: -50,
      },
      true
    );    
  };
  return (
    <RigidBody ref={group} colliders={"ball"} type={"dynamic"}>
      <group  {...props} dispose={null} >
        <group name="Sketchfab_Scene"  >
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={7}     
            onClick={onHandleBall}
          >
            <group name="root" >
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} >
                <group name="Bowling_Ball_3" >
                  <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Bowling_Ball}
                  />
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Bowling_Ball}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
}
