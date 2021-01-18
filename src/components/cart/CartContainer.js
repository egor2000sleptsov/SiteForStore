import Cart from "./Cart";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    items: state.cart.array
})

let mapDispatchToProps = (dispatch) => ({

})

const CartContainer = connect(mapStateToProps,mapDispatchToProps())(Cart)

export default CartContainer;