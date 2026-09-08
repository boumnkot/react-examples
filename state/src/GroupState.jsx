import { useState } from 'react';

export function GroupState() {
  /*
  INSTEAD OF THIS:
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  */
  //DO THIS
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //Use this when state variables change together.

  return (
    <div
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{ position: 'relative', width: '100vw', height: '100vh' }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(255, 217, 0, 0.75)',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -7,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
