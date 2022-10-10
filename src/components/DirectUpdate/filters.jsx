
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import '../../styles/dropDownDemo.scss';
//import { legs,vendors,liners,originPorts,destPorts,cargoType,chargeName,loadType } from '../../data';
import { useDispatch,useSelector } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import { getLeg,getVendor,getLiner,getOriginPort,getDestPort,getCargoType,getChargeName,getLoadType,getAllFilters } from '../../actions/DirectUpdate/filterAction';
import { getAllFilteredData } from '../../actions/DirectUpdate/tableActios';

const DropdownDemo = () => {

    const dispatch = useDispatch();

    const {leg} = useSelector((state) => state.leg);
    const {vendor} = useSelector((state) => state.vendor);
    const {liner} = useSelector((state) => state.liner);
    const {origin} = useSelector((state) => state.origin);
    const {destination} = useSelector((state) => state.destination);
    const {cargo} = useSelector((state) => state.cargoType);
    const {charge} = useSelector((state) => state.chargeName);
    const {load} = useSelector((state) => state.loadType);
    const {filters} = useSelector((state) => state.filters)
    //console.log(filters[0]);

    const [selectedLeg, setSelectedLeg] = useState(null);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [selectedLiner, setSelectedLiner] = useState(null);
    const [selectedOriginPort, setSelectedOriginPort] = useState(null);
    const [selectedDestinationPort, setSelectedDestinationPort] = useState(null);
    const [selectedCargoType, setSelectedCargoType] = useState(null);
    const [selectedChargeName, setSelectedChargeName] = useState(null);
    const [selectedLoadType, setSelectedLoadType] = useState(null);

    const [batchCode, setBatchCode] = useState('');
    const batchCodeDebounceValue = useDebounce(batchCode);
    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    useUpdateEffect(() => {
        dispatch(getLeg(batchCode));
        dispatch(getVendor(batchCode));
        dispatch(getLiner(batchCode));
        dispatch(getOriginPort(batchCode));
        dispatch(getDestPort(batchCode));
        dispatch(getCargoType(batchCode));
        dispatch(getChargeName(batchCode));
        dispatch(getLoadType(batchCode));
        //dispatch(getAllFilters(batchCode));
        
    }, [batchCodeDebounceValue]);

    const filterSubmit = () => {
        dispatch(getAllFilteredData(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType));
    }


    const onLegChange = (e) => {
        setSelectedLeg(e.value);
    }
    const onVendorChange = (e) => {
        setSelectedVendor(e.value);
    }
    const onLinerChange = (e) => {
        setSelectedLiner(e.value);
    }
    const onOriginPortChange = (e) => {
        setSelectedOriginPort(e.value);
    }
    const onDestPortChange = (e) => {
        setSelectedDestinationPort(e.value);
    }
    const onCargoTypeChange = (e) => {
        setSelectedCargoType(e.value);
    }
    const onChargeNameChange = (e) => {
        setSelectedChargeName(e.value);
    }
    const onLoadTypeChange = (e) => {
        setSelectedLoadType(e.value);
    }

    const selectedLegTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedVendorTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedLinerTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedOriginPortTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedDestPortTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedChargeNameTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedCargoTypeTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const selectedLoadTypeTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    {option._id}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    
    const LegOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const VendorOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const LinerOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const OriginPortOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const DestPortOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const ChargeNameOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const CargoTypeOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    const LoadTypeOptionTemplate = (option) => {
        return (
            <div>
                {option._id}
            </div>
        );
    }
    //const batchCode="6U3FFyhM1yBX1yiUGBRLlqtC7PPHMKGWC5sIxQlG";
    
    return (
        <div>
            <div className="filters">
                <InputText className="text" value={batchCode} onChange={(e) => setBatchCode(e.target.value)} placeholder='Batch Code' />

                <Dropdown className='text' value={selectedLeg} options={leg} onChange={onLegChange} optionLabel="_id" optionValue='_id' filter filterBy="_id" showClear placeholder="Leg"
                     valueTemplate={selectedLegTemplate} itemTemplate={LegOptionTemplate} disabled={!batchCode} />

                <Dropdown className='text' value={selectedVendor} options={vendor} onChange={onVendorChange} optionLabel="_id" optionValue='_id' filter showClear filterBy="_id" placeholder="Vendor"
                    valueTemplate={selectedVendorTemplate} itemTemplate={VendorOptionTemplate} disabled={!batchCode}/>

                <Dropdown className='text' value={selectedLiner} options={liner} onChange={onLinerChange} optionLabel="_id" optionValue='_id' filter showClear filterBy="_id" placeholder="Liner"
                    valueTemplate={selectedLinerTemplate} itemTemplate={LinerOptionTemplate} disabled={!batchCode}/>
                
                <Dropdown className='text' value={selectedOriginPort} options={origin} onChange={onOriginPortChange} optionLabel="_id" optionValue='_id' filter showClear placeholder="Origin Port"
                    valueTemplate={selectedOriginPortTemplate} itemTemplate={OriginPortOptionTemplate} disabled={!batchCode}/>
                
                <Dropdown className='text' value={selectedDestinationPort} options={destination} onChange={onDestPortChange} optionLabel="_id" optionValue='_id' filter showClear filterBy="_id" placeholder="Destination Port"
                    valueTemplate={selectedDestPortTemplate} itemTemplate={DestPortOptionTemplate} disabled={!batchCode}/>

                <Calendar className='text' id="basic" value={date1} onChange={(e) => setDate1(e.value)} placeholder='Start Date' disabled={!batchCode}/>

                <Calendar className='text' id="basic" value={date2} onChange={(e) => setDate2(e.value)} placeholder='Expiry Date' disabled={!batchCode}/>

                <Dropdown className='text' value={selectedCargoType} options={cargo} onChange={onCargoTypeChange} optionLabel="_id" optionValue='_id' filter showClear filterBy="_id" placeholder="Cargo Type"
                    valueTemplate={selectedCargoTypeTemplate} itemTemplate={CargoTypeOptionTemplate} disabled={!batchCode}/>

                <Dropdown className='text' value={selectedChargeName} options={charge} onChange={onChargeNameChange} optionLabel="_id" optionValue='_id' filter showClear filterBy="_id" placeholder="Charge Name"
                    valueTemplate={selectedChargeNameTemplate} itemTemplate={ChargeNameOptionTemplate} disabled={!batchCode}/>

                <Dropdown className='text' value={selectedLoadType} options={load} onChange={onLoadTypeChange} optionLabel="_id" optionValue='_id' filter showClear filterBy="_id" placeholder="Load Type"
                    valueTemplate={selectedLoadTypeTemplate} itemTemplate={LoadTypeOptionTemplate} disabled={!batchCode}/>

                <Button className='button' label="Submit" aria-label="Submit" disabled={!batchCode} onClick={filterSubmit}/>
            </div>
        </div>
    );
}
export default DropdownDemo;