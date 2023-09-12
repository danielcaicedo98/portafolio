import { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";

const Dragon = (props) => {
    const group = useRef();
    const dragonModel = useGLTF('/assets/models/dragon/scene.gltf');
    const {nodes,materials,animations} = dragonModel;
    const { actions } = useAnimations(animations, group);

    //Materials Dragon

    const PATH = "/assets/models/dragon/textures/"

    const propsTexture = useTexture({
         map: PATH + 'dragonDifuse.png',         
         normalMap: PATH + 'dragonNormal.png',
         roughnessMap: PATH + 'dragonRoughness.png',
         aoMap: PATH + 'dragonAO.png',
    })
    
    useEffect(() => {
        const action = actions["flying"]
        if (action) {
            action.play();
        }
    }, [])
    
    return (
        <group ref={group} {...props} dispose={null}>
          <group name="Sketchfab_Scene">
            <group
              name="Sketchfab_model"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={7.319}
            >
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="RootNode0_0" scale={0.01}>
                    <group name="skeletal3_3">
                      <group name="GLTF_created_0">
                        <primitive object={nodes.GLTF_created_0_rootJoint} />
                        <skinnedMesh
                          name="Object_228"
                          geometry={nodes.Object_228.geometry}                                              
                          skeleton={nodes.Object_228.skeleton}
                        >
                            <meshStandardMaterial {...propsTexture} />
                        </skinnedMesh>
                        <group name="dragon_wings22_2_correction">
                          <group name="dragon_wings22_2" />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      );

}
export default Dragon;
useGLTF.preload("/assets/models/dragon/scene.gltf");

