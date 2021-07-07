/*
通过mutation间接更新state状态
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  TEST } from './mutation-type'
import {
  reqAddress,
  reqFoodList,
  reqShopList} from '../api/index'

export default {
  // 获取地址
  async getAddress({commit,state}){
    const geohash = state.latitude+','+state.longitude;
    //ajax异步请求
    const result = await reqAddress(geohash);
    if(result.code===0){
      const address = result.data;
      // 提交一个mutation
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 食品分类
  async getCategories({commit}){
    //ajax异步请求
    const result = await reqFoodList();
    if(result.code===0){
      const categories = result.data;
      // 提交一个mutation
      commit(RECEIVE_CATEGORIES,{categories})
    }
  },
  // 商店分类
  async getShops({commit,state}){
    const {longitude,latitude} = state;
    //ajax异步请求
    const result = await reqShopList(longitude,latitude);
    if(result.code===0){
      const shops = result.data;
      // 提交一个mutation
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  getTest({commit}){
    commit(TEST)
  }

}
