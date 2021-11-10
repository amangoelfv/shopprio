
import { SHOP_DATA } from "./shop.data";

const collectionReducer = (state = SHOP_DATA, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default collectionReducer;