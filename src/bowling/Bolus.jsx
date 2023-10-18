import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Bolus(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/bolus/bowling_pin.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [play, setPlay] = useState(false);
  const [hitSound] = useState(() => new Audio("/assets/sounds/collide.mpeg"));

  useEffect(() => {
    if (play) {
      hitSound.currentTime = 0;
      hitSound.volume = Math.random();
      hitSound.play();
    }
  }, [!play]);
  useEffect(() => {
    group.current.sleep();
  }, []);
  return (
    <RigidBody
      ref={group}
      onCollisionEnter={() => setPlay(true)}
      onCollisionExit={() => setPlay(false)}
      colliders={"cuboid"}
      type = {"dynamic"}
    >
      <group {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.004}
          >
            <group name="BOWLING_PINfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Light"
                    position={[407.625, 590.386, -100.545]}
                    rotation={[1.89, 0.881, -2.045]}
                    scale={100}
                  >
                    <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_6" />
                    </group>
                  </group>
                  <group
                    name="Camera"
                    position={[735.889, 495.831, 692.579]}
                    rotation={[-Math.PI, 0.756, 2.68]}
                    scale={100}
                  >
                    <group name="Object_8" />
                  </group>
                  <group
                    name="Cylinder"
                    position={[0, 247.868, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  >
                    <mesh
                      name="Cylinder_Material002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_Material002_0.geometry}
                      material={materials["Material.002"]}
                    />
                    <mesh
                      name="Cylinder_Material003_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_Material003_0.geometry}
                      material={materials["Material.003"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/bolus/bowling_pin.glb");
