

function MenuItem({type, price, qty}){
    return(
        <div>
            <div>{type}</div>
            <div>${price}</div>
            <div>Qty: {qty}</div>
            <button>+</button>
            <button>-</button>
            <div>Total: ${price * qty}</div>
        </div>
    );
}

export default MenuItem;