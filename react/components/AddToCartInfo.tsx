import React from "react";
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from "./ButtonGroup";
// import Totalizers from "./Totalizers";
// import ProductGroup from "./ProductGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css'

const AddToCartInfo = ({ blockCLass }: { blockCLass: string }) => {
  const container = generateBlockClass(styles.container, blockCLass),
    container__item = generateBlockClass(styles.container__item, blockCLass),
    container__detail = generateBlockClass(styles.container__detail, blockCLass),
    container__detailone = generateBlockClass(styles.container__detailone, blockCLass),
    total__price = generateBlockClass(styles.total__price, blockCLass)


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

              <div className={container__detail}>
                <div >
                  <img src={item.imageUrls.at1x} alt="img item" />
                </div>
                <div className={container__detailone}>
                  <p>{item.name}</p>
                  <p>Ref:{item.id}</p>
                  <p>Cant:{item.quantity}</p>
                </div>
              </div>
              <div>
                <p >${item.price / 100}</p>
              </div>
            </div>

          )
        }
        )
      }
      {/* <Totalizers totalizers={totalizers}/> */}
      <div>
        <p>Total items en tu compra: {items.length} </p>
        {
          totalizers.length <= 0
            ?
            <p className={total__price}>Total: calculando...</p>
            :
            <p className={total__price}>Total: ${totalizers?.value / 100}</p>
        }
      </div>
      <ButtonGroup blockCLass={blockCLass} />
    </div>
  )
}

export default AddToCartInfo