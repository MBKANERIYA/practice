import { all } from "redux-saga/effects";
import { handle_delete_product_saga, handle_get_product_saga, handle_post_product_saga } from "./saga";

function* rootSaga() {
    yield all([
        handle_post_product_saga(),
        handle_get_product_saga(),
        handle_delete_product_saga()
    ])
}

export default rootSaga