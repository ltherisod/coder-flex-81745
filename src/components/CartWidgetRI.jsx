import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
const CartWidgetRI = ()=> {
    return(
        <div>
            <FaCartShopping fontSize={'1.5rem'}/>
            <Badge bg='danger'>5</Badge>
        </div>
    )
}
export default CartWidgetRI