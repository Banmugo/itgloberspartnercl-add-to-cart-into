import React from "react";
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from "./ButtonGroup";
// import Totalizers from "./Totalizers";
// import ProductGroup from "./ProductGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css'

const AddToCartInfo = ({blockCLass}: { blockCLass: string }) => {
  const container = generateBlockClass(styles.container, blockCLass)
  const container__item = generateBlockClass(styles.container__item, blockCLass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Este producto tiene esta info:", productInfo)
  console.log("Estos son mis totales:", totalizers)
  return (
    <div className={container}>
      {/* <ProductGroup products={items}/> */}
      {
        items.map((item: any, index: number) => {
          console.log(item);
          return (
            <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x} alt="img item" />
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant:{item.quantity}</p>
              </div>
            </div>
          )
        }
        )
      }
      {/* <Totalizers totalizers={totalizers}/> */}
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: ${totalizers?.value / 100}</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo