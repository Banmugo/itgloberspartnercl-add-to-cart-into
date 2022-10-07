// este componente nos mostrara las acciones

import React from "react";
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css'

const ButtonGroup = ({ blockCLass }: { blockCLass: string }) => {
  const container__buttons = generateBlockClass(styles.container__buttons, blockCLass),
    button__oneAndThree = generateBlockClass(styles.button__oneAndThree, blockCLass),
    button__two = generateBlockClass(styles.button__two, blockCLass)

  return (
    <div className={container__buttons}>
      <div >
        <a href="/checkout/#/cart">
          <button className={button__oneAndThree}>Ir a pagar</button>
        </a>
      </div>
      <div>
        <a href="/">
          <button className={button__two}>Continuar comprando</button>
        </a>
      </div>
      <div>
        <a href="/">
          <button className={button__oneAndThree}>Ver carrito</button>
        </a>
      </div>
    </div>
  )
}
export default ButtonGroup