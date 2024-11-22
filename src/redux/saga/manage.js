import { call, put } from "redux-saga/effects";
import { create_product, delete_product, get_product } from "../main/api";
import { DELETE_PRODUCT_NOTFOUND, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_NOTFOUND, GET_PRODUCT_SUCCESS, POST_PRODUCT_NOTFOUND, POST_PRODUCT_SUCCESS } from "../main/action";

function* handle_post_product(action) {
    try {
        let { data, status } = yield call(create_product, action)
        console.log(status, "post manage");
        yield put({ type: POST_PRODUCT_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: POST_PRODUCT_NOTFOUND, payload: err })
    }
}

function* handle_get_product(action) {
    try {
        let { data, status } = yield call(get_product, action)
        yield put({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: GET_PRODUCT_NOTFOUND, payload: err })
    }
}

function* handle_delete_product(action) {
    try {
        let { data, status } = yield call(delete_product, action)
        yield put({ type: DELETE_PRODUCT_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: DELETE_PRODUCT_NOTFOUND, payload: err })
    }
}

export { handle_post_product, handle_get_product, handle_delete_product }