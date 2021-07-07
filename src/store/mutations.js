/*
直接更新state状态
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  TEST } from './mutation-type'

export default {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_CATEGORIES] (state,{categories}) {
    state.categories = categories
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  },
  [TEST](){
    console.log(32534534);
  }
}

