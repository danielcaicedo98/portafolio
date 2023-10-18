import { RigidBody } from "@react-three/rapier";
import { Bolus } from "./Bolus";
import { BowBall } from "./BowBall";

export function Bowling(props) {


  return (
    <>
      <Bolus position={[2, -2, -2]} />
      <Bolus position={[2.8, -2, -2]} />
      <Bolus position={[3.6, -2, -2]} />

      <Bolus position={[2.5, -2, -1]} />
      <Bolus position={[3.3, -2, -1]} />

      <Bolus position={[3, -2, 0.2]} />

      <BowBall position={[2.2, -2, 3]} />

      <RigidBody
        // type={"dynamic"}
        type = {"fixed"}
        colliders={"trimesh"}
        position={[2.2, -2.6, 3]}
        rotation-x={-Math.PI / 2}
        // gravityScale={-0.01}
      >
        <mesh scale={1}>
          <torusGeometry args={[1.2, 0.5, 16, 32]} />
          <meshLambertMaterial color={"yellow"} />
          {/* <BallCollider args={[1]}  /> */}
        </mesh>
      </RigidBody>
    </>
  );
}
