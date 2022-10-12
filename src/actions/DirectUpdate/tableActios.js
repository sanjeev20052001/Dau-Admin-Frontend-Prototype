import { FETCH_ALL_FILTERS,UPDATE_SINGLE_FIELD } from "../../constants/DirectUpdate/tableConstants";
import axios from "axios";

const url = 'http://localhost:5000'

export const getAllFilteredData = (batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType, skip=0, limit=100) => async (dispatch) => {
    try {
      console.log(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType);
      const filteredData = await axios.get(`${url}/batchcode?data.batchcode=${batchCode}&data.leg_code=${selectedLeg}&data.vendor.vendor_name=${selectedVendor}&data.sub_vendor.sub_vendor_name=${selectedLiner}&meta.origin_port=${selectedOriginPort}&meta.destination_port=${selectedDestinationPort}&data.cargo_type=${selectedCargoType}&data.charges.charge_name=${selectedChargeName}&meta.load_type=${selectedLoadType}&skip=${skip}&limit=${limit}`);
      dispatch({ type: FETCH_ALL_FILTERS, payload: filteredData.data });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateSingleField = () => async (dispatch) => {

};