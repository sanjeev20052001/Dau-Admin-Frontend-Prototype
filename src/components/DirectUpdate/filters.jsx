
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import '../../styles/dropDownDemo.scss';
//import { cargoType,loadType } from '../../data';
import { useDispatch,useSelector } from 'react-redux';
// import useDebounce from '../../hooks/useDebounce';
// import useUpdateEffect from '../../hooks/useUpdateEffect';
import { getLVL,getOriginPort,getDestPort,getCargoType,getChargeName,getLoadType } from '../../actions/DirectUpdate/filterAction';
import { getAllFilteredData } from '../../actions/DirectUpdate/tableActios';

let ctr = 0;
let disableCtr = 0;
let filterCtr = 0;
let prevBatchCode=null;


const DropdownDemo = () => {

    const dispatch = useDispatch();

    const {lvl} = useSelector((state) => state.lvl);
    const {origin} = useSelector((state) => state.origin);
    const {destination} = useSelector((state) => state.destination);
    const {cargo} = useSelector((state) => state.cargoType);
    const {charge} = useSelector((state) => state.chargeName);
    const {load} = useSelector((state) => state.loadType);

    const [selectedLeg, setSelectedLeg] = useState(null);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [selectedLiner, setSelectedLiner] = useState(null);
    const [selectedOriginPort, setSelectedOriginPort] = useState(null);
    const [selectedDestinationPort, setSelectedDestinationPort] = useState(null);
    const [selectedCargoType, setSelectedCargoType] = useState(null);
    const [selectedChargeName, setSelectedChargeName] = useState(null);
    const [selectedLoadType, setSelectedLoadType] = useState(null);

    const [batchCode, setBatchCode] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [expiryDate, setExpiryDate] = useState(null);
    const filterSubmit = () => {
        if(batchCode.length!==0 && batchCode!==prevBatchCode)
        {
            dispatch(getLVL(batchCode));
            dispatch(getOriginPort(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType));
            dispatch(getDestPort(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType));
            dispatch(getCargoType(batchCode));
            dispatch(getChargeName(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, selectedCargoType, selectedChargeName, selectedLoadType));
            dispatch(getLoadType(batchCode));
            prevBatchCode=batchCode;
            console.log(prevBatchCode);
            ctr=1;
        }
        else if(batchCode.length!==0)
        {
            dispatch(getAllFilteredData(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, startDate, expiryDate, selectedCargoType, selectedChargeName, selectedLoadType));
        }
    }

    const onLegChange = (props) => {
        setSelectedLeg(props.options[0].leg);
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

    const selectedLegTemplate = (options, props) => {
        if (props.options!==null) {
            return (
                <div>
                    {props.options[0].leg}
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
        if (props.options!==null) {
            return (
                <div>
                    {props.options[0].vendor}
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
        if (props.options!==null) {
            return (
                <div>
                    {props.options[0].liner}
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
                    {option.origin}
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
                    {option.destination}
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
                    {option.charge}
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
                    {option.name}
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
                    {option.name}
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    
    const LegOptionTemplate = (props) => {
        return (
            <div>
                {props.options[0].leg}
            </div>
        );
    }
    const VendorOptionTemplate = (props) => {
        return (
            <div>
                {props.options[0].vendor}
            </div>
        );
    }
    const LinerOptionTemplate = (props) => {
        return (
            <div>
                {props.options[0].liner}
            </div>
        );
    }
    const OriginPortOptionTemplate = (option) => {
        return (
            <div>
                {option.origin}
            </div>
        );
    }
    const DestPortOptionTemplate = (option) => {
        return (
            <div>
                {option.destination}
            </div>
        );
    }
    const ChargeNameOptionTemplate = (option) => {
        return (
            <div>
                {option.charge}
            </div>
        );
    }
    const CargoTypeOptionTemplate = (option) => {
        return (
            <div>
                {option.name}
            </div>
        );
    }
    const LoadTypeOptionTemplate = (option) => {
        return (
            <div>
                {option.name}
            </div>
        );
    }

        if( lvl && origin.length!==0 && destination.length!==0 && charge.length!==0 && batchCode.length!==0)
        {
            if(filterCtr===0 || batchCode!==prevBatchCode)
            {
                dispatch(getAllFilteredData(batchCode, selectedLeg, selectedVendor, selectedLiner, selectedOriginPort, selectedDestinationPort, startDate, expiryDate, selectedCargoType, selectedChargeName, selectedLoadType));
                filterCtr=1;
            }
            disableCtr=1;
        }

    
    return (
        <div>
            <div className="filters">
                <InputText className="text" value={batchCode} onChange={(e) => setBatchCode(e.target.value)} placeholder='Batch Code' />

                <Dropdown className='text' value={selectedLeg} options={lvl.leg} onChange={onLegChange} optionLabel="leg" optionValue='leg' filter filterBy="leg" showClear placeholder="Leg"
                     valueTemplate={selectedLegTemplate} itemTemplate={LegOptionTemplate} disabled/>

                <Dropdown className='text' value={selectedVendor} options={lvl.vendor} onChange={onVendorChange} optionLabel="vendor" optionValue='vendor' filter showClear filterBy="vendor" placeholder="Vendor"
                    valueTemplate={selectedVendorTemplate} itemTemplate={VendorOptionTemplate} disabled/>

                <Dropdown className='text' value={selectedLiner} options={lvl.liner} onChange={onLinerChange} optionLabel="liner" optionValue='liner' filter showClear filterBy="liner" placeholder="Liner"
                    valueTemplate={selectedLinerTemplate} itemTemplate={LinerOptionTemplate} disabled/>
                
                <Dropdown className='text' value={selectedOriginPort} options={origin} onChange={onOriginPortChange} optionLabel="origin" optionValue='origin' filter showClear filterBy="origin" placeholder="Origin Port"
                    valueTemplate={selectedOriginPortTemplate} itemTemplate={OriginPortOptionTemplate} virtualScrollerOptions={{itemSize:50 }} disabled={disableCtr===0}/>
                
                <Dropdown className='text' value={selectedDestinationPort} options={destination} onChange={onDestPortChange} optionLabel="destination" optionValue='destination' filter showClear filterBy="destination" placeholder="Destination Port"
                    valueTemplate={selectedDestPortTemplate} itemTemplate={DestPortOptionTemplate} virtualScrollerOptions={{itemSize:50 }} disabled={disableCtr===0}/>

                <Calendar className='text' dateFormat='dd/mm/yy' id="basic" value={startDate} onChange={(e) => setStartDate(e.value)} placeholder='Start Date' disabled={disableCtr===0}/>
        
                <Calendar className='text' dateFormat='dd/mm/yy' id="basic" value={expiryDate} onChange={(e) => setExpiryDate(e.value)} placeholder='Expiry Date' disabled={disableCtr===0}/>

                <Dropdown className='text' value={selectedCargoType} options={cargo} onChange={onCargoTypeChange} optionLabel="name" optionValue='name' filter showClear filterBy="name" placeholder="Cargo Type"
                    valueTemplate={selectedCargoTypeTemplate} itemTemplate={CargoTypeOptionTemplate} disabled={disableCtr===0}/>

                <Dropdown className='text' value={selectedChargeName} options={charge} onChange={onChargeNameChange} optionLabel="charge" optionValue='charge' filter showClear filterBy="charge" placeholder="Charge Name"
                    valueTemplate={selectedChargeNameTemplate} itemTemplate={ChargeNameOptionTemplate} disabled={disableCtr===0}/>

                <Dropdown className='text' value={selectedLoadType} options={load} onChange={onLoadTypeChange} optionLabel="name" optionValue='name' filter showClear filterBy="name" placeholder="Load Type"
                    valueTemplate={selectedLoadTypeTemplate} itemTemplate={LoadTypeOptionTemplate} disabled={disableCtr===0}/>

                <Button className='button' label="Submit" aria-label="Submit" onClick={filterSubmit}/>
            </div>
        </div>
    );
}
export default DropdownDemo;