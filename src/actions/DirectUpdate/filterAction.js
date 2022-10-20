import { CargoType,LoadType } from "../../data";
import { FETCH_ALL_LVL, FETCH_ALL_CARGO_TYPE, FETCH_ALL_CHARGE_NAME, FETCH_ALL_DESTINATION, FETCH_ALL_LOAD_TYPE, FETCH_ALL_ORIGIN } from "../../constants/DirectUpdate/filterConstants";
import axios from 'axios';

const url = 'http://localhost:5000'

export const getLVL= (batchCode) => async (dispatch) => {
    try {
      const lvl = await axios.get(`${url}/lvl?data.batchcode=${batchCode}`);
      dispatch({ type: FETCH_ALL_LVL, payload: lvl.data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getOriginPort = (batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType) => async (dispatch) => {
  try {
    const origin = await axios.get(`${url}/origin?data.batchcode=${batchCode}&data.leg_code=${selectedLeg}&data.vendor.vendor_name=${selectedVendor}&data.sub_vendor.sub_vendor_name=${selectedLiner}&meta.origin_port=${selectedOriginPort}&meta.destination_port=${selectedDestinationPort}&data.cargo_type=${selectedCargoType}&data.charges.charge_name=${selectedChargeName}&meta.load_type=${selectedLoadType}`);
    // dispatch(getDestPort(batchCode));
    dispatch({ type: FETCH_ALL_ORIGIN, payload: origin.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDestPort = (batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType) => async (dispatch) => {
  try {
    const destination = await axios.get(`${url}/destination?data.batchcode=${batchCode}&data.leg_code=${selectedLeg}&data.vendor.vendor_name=${selectedVendor}&data.sub_vendor.sub_vendor_name=${selectedLiner}&meta.origin_port=${selectedOriginPort}&meta.destination_port=${selectedDestinationPort}&data.cargo_type=${selectedCargoType}&data.charges.charge_name=${selectedChargeName}&meta.load_type=${selectedLoadType}`);
    // dispatch(getCargoType(batchCode));
    dispatch({ type: FETCH_ALL_DESTINATION, payload: destination.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCargoType = (batchCode) => (dispatch) => {
  try {
    const cargoType = CargoType;
    // dispatch(getChargeName(batchCode));
    dispatch({ type: FETCH_ALL_CARGO_TYPE, payload: cargoType });
  } catch (error) {
    console.log(error.message);
  }
};

export const getChargeName = (batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType) => async (dispatch) => {
  try {
    const chargeName = await axios.get(`${url}/charge?data.batchcode=${batchCode}&data.leg_code=${selectedLeg}&data.vendor.vendor_name=${selectedVendor}&data.sub_vendor.sub_vendor_name=${selectedLiner}&meta.origin_port=${selectedOriginPort}&meta.destination_port=${selectedDestinationPort}&data.cargo_type=${selectedCargoType}&data.charges.charge_name=${selectedChargeName}&meta.load_type=${selectedLoadType}`);
    // dispatch(getLoadType(batchCode));
    dispatch({ type: FETCH_ALL_CHARGE_NAME, payload: chargeName.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLoadType = (batchCode) => async (dispatch) => {
  try {
    const loadType = LoadType;
    dispatch({ type: FETCH_ALL_LOAD_TYPE, payload: loadType });
  } catch (error) {
    console.log(error.message);
  }
};