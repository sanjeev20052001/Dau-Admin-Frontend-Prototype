//import { data } from "../data";
import { FETCH_ALL_LEG,FETCH_ALL_CARGO_TYPE, FETCH_ALL_CHARGE_NAME, FETCH_ALL_DESTINATION, FETCH_ALL_LINER, FETCH_ALL_LOAD_TYPE, FETCH_ALL_ORIGIN, FETCH_ALL_VENDOR,FETCH_ALL_FILTERS } from "../../constants/DirectUpdate/filterConstants";
import axios from 'axios';

const url = 'http://localhost:5000'

export const getLeg = (batchCode) => async (dispatch) => {
    try {
      const leg = await axios.get(`${url}/leg?batchcode=${batchCode}`);
      // dispatch(getVendor(batchCode));
      dispatch({ type: FETCH_ALL_LEG, payload: leg.data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getVendor = (batchCode) => async (dispatch) => {
  try {
    const vendor = await axios.get(`${url}/vendor?batchcode=${batchCode}`);
    // dispatch(getLiner(batchCode));
    dispatch({ type: FETCH_ALL_VENDOR, payload: vendor.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLiner = (batchCode) => async (dispatch) => {
  try {
    const liner = await axios.get(`${url}/liner?batchcode=${batchCode}`);
    // dispatch(getOriginPort(batchCode));
    dispatch({ type: FETCH_ALL_LINER, payload: liner.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOriginPort = (batchCode) => async (dispatch) => {
  try {
    const origin = await axios.get(`${url}/origin?batchcode=${batchCode}`);
    // dispatch(getDestPort(batchCode));
    dispatch({ type: FETCH_ALL_ORIGIN, payload: origin.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDestPort = (batchCode) => async (dispatch) => {
  try {
    const destination = await axios.get(`${url}/destination?batchcode=${batchCode}`);
    // dispatch(getCargoType(batchCode));
    dispatch({ type: FETCH_ALL_DESTINATION, payload: destination.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCargoType = (batchCode) => async (dispatch) => {
  try {
    const cargoType = await axios.get(`${url}/cargo?batchcode=${batchCode}`);
    // dispatch(getChargeName(batchCode));
    dispatch({ type: FETCH_ALL_CARGO_TYPE, payload: cargoType.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getChargeName = (batchCode) => async (dispatch) => {
  try {
    const chargeName = await axios.get(`${url}/charge?batchcode=${batchCode}`);
    // dispatch(getLoadType(batchCode));
    dispatch({ type: FETCH_ALL_CHARGE_NAME, payload: chargeName.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLoadType = (batchCode) => async (dispatch) => {
  try {
    const loadType = await axios.get(`${url}/loadtypes?batchcode=${batchCode}`);
    dispatch({ type: FETCH_ALL_LOAD_TYPE, payload: loadType.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllFilters = (batchCode) => async (dispatch) => {
  try {
    const filters = await axios.get(`${url}/filter?batchcode=${batchCode}`);
    dispatch({ type: FETCH_ALL_FILTERS, payload: filters.data });
  } catch (error) {
    console.log(error.message);
  }
};