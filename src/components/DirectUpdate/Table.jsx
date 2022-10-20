import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { InputText } from "primereact/inputtext";
import '../../styles/OrderList.scss'


const Table = () => {

  const [expandedRows, setExpandedRows] = useState();
  const [tableData, setTableData] = useState(null);

  const {filteredData} = useSelector((state) => state.filter);

  const columns = [
    { field: 'meta.origin_port', header: 'Origin Port' },
    { field: 'meta.destination_port', header: 'Destination Port' },
    { field: 'data.via_port', header: 'Via Port' },
    { field: 'meta.load_type', header: 'Load Type' },
    { field: 'data.contract_number', header: 'Contract Number' },
    { field: 'data.transit_time', header: 'Transit Time' },
    { field: 'data.other_charges', header: 'Other Charges' },
    { field: 'data.service_type', header: 'Service Type' },
    { field: 'data.inclusions', header: 'Inclusions' },
    { field: 'data.if_pplicable_charges', header: 'If Applicable Charges' },
    { field: 'data.remarks', header: 'Remarks' },
    { field: 'meta.start_date', header: 'Start Date' },
    { field: 'data.expiry', header: 'Expiry Date' },
    { field: 'data.via_pol', header: 'Via Pol' },
    { field: 'data.via_pod', header: 'Via Pod' },
    { field: 'cargo_type', header: 'Cargo Type' },
    { field: 'data.commodity', header: 'Commodities' },
    { field: 'summation', header: 'Summation' }
  ];

  const chargeColumns = [
    { field: 'charge_id', header: 'Charge Id' },
    { field: 'charge_name', header: 'Charge Name' },
    { field: 'charge_cost', header: 'Charge' },
    { field: 'charge_basis', header: 'Basis' },
    { field: 'charge_currency', header: 'Currency' }
  ]

  useEffect(() => {
    setTableData(filteredData)
  }, [filteredData]);

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;
    if (newValue.trim().length >= 0)
      rowData[field] = newValue;
    else
      event.preventDefault();
  }

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  }

  const rowExpansionTemplate = (tableData) => {
    return (
      <div className="chargTable">
        <DataTable
          value={tableData.data.charges}
          resizableColumns
          showGridlines
          dataKey="_id"
          emptyMessage="No data found."
          className="editable-cells-table"
          editMode="cell"
        >
          {  
            chargeColumns.map(({ field, header }) => {
              return <Column key={field} field={field} header={header} align={"center"} style={{ width: '25%'}} 
                editor={(options) => textEditor(options)} onCellEditComplete={onCellEditComplete} />
            })
          }
        </DataTable>
      </div>
    );
  }

  return (
    <div className="datatable-editing-demo">
      <div className="card p-fluid">
        <DataTable
          value={tableData}
          resizableColumns
          showGridlines
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          dataKey="_id"
          paginator
          emptyMessage="No data found."
          className="editable-cells-table"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
          rows={20}
          editMode="cell"
          expandedRows={expandedRows} 
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          
        >

          <Column expander style={{ width: '3rem' }} />
          {  
            columns.map(({ field, header }) => {
              return <Column key={field} field={field} header={header} align={"center"} style={{ width: '25%'}} 
                editor={(options) => textEditor(options)} onCellEditComplete={onCellEditComplete} />
            })
          }
        </DataTable>
      </div>
    </div>
  );
};
export default Table;
