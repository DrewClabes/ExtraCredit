import MenuItem from "../menu-item/MenuItem";

function Menu({startingItems}){
    return(
        <section>
            <h1>Drew's Pizzeria</h1>
            <div>
                <MenuItem 
                type={startingItems}
                />
            </div>
        </section>
    );
}

export default Menu;