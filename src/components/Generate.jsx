import React from "react";


/**
 * 
  return props.object.map((fila, i) =>
        fila.map((_, j) => <rect key={Math.random() * Math.random()}
            fill={props.generateColorMode()} width="100" height="100" x={j * 100} y={i * 100} />
        ));
 */

const Generate = (props) => {

    return props.object.map((fila, i) =>
        fila.map((e, j) => {
            return <rect key={e.key}
                fill={e.fill} width={e.width} height={e.height} x={j * 100} y={i * 100} />
        }
        ));

}

export default Generate;