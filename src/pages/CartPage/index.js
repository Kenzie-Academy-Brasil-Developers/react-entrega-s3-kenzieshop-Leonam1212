import { useSelector } from "react-redux"
import Product from "../Product"
const Cart = () => {
    const cart = useSelector(store => store.cart)

    return (
        <div>
            <h1>Carrinho</h1>
            {cart.map( product =>  <Product key={product.id} product={product} isRemoved />)}
        </div>
    )



}
export default Cart 