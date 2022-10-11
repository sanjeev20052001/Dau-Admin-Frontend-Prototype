import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { InputText } from "primereact/inputtext";


const Table = () => {

  //const [expandedRows, setExpandedRows] = useState();
  //const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const {filteredData} = useSelector((state) => state.filter);

  const columns = [
    { field: 'meta.origin_port', header: 'Origin Port' },
    { field: 'meta.destination_port', header: 'Destination Port' },
    { field: 'data.via_port', header: 'Via Port' },
    { field: 'meta.load_type', header: 'Load Type' },
    { field: 'data.contract_number', header: 'Contract Number' },
    { field: 'data.transit_time', header: 'Transit Time' },
    { field: 'other_charges', header: 'Other Charges' },
    { field: 'data.service_type', header: 'Service Type' },
    { field: 'data.inclusions', header: 'Inclusions' },
    { field: 'data.if_pplicable_charges', header: 'If Applicable Charges' },
    { field: 'data.remarks', header: 'Remarks' },
    { field: 'meta.start_date', header: 'Start Date' },
    { field: 'data.expiry', header: 'Expiry Date' },
    { field: 'data.via_pol', header: 'Via Pol' },
    { field: 'data.via_pod', header: 'Via Pod' },
    { field: 'data.cargo_type', header: 'Cargo Type' },
    { field: 'data.commodity', header: 'Commodities' },
    { field: 'summation', header: 'Summation' }
  ];

  useEffect(() => {
    setProducts(filteredData)
  }, [filteredData]);

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;
    if (newValue.trim().length > 0)
      rowData[field] = newValue;
    else
      event.preventDefault();
    }

  const cellEditor = (options) => {
    return textEditor(options);
  }

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
}

  return (
    <div>
      <div className="card">
        <DataTable
          value={products}
          resizableColumns
          //columnResizeMode="expand"
          showGridlines
          //responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          dataKey="_id"
          paginator
          emptyMessage="No data found."
          className="editable-cells-table"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
          rows={20}
          removableSort
          editMode="cell"
          scrollHeight="680px" 
        >

          <Column expander />
          {  
            columns.map(({ field, header }) => {
              return <Column key={field} field={field} header={header} align={"center"} style={{ width: '25%'}} 
                editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
            })
          }

          {/* <Column
            field="meta.origin_port"
            // editMode="row"
            header="Origin Port"
            editor={(options) => textEditor(options)}
            align={"center"}
            
            style={{ textAlign: "center" }}
            // sortable
          />
          <Column
            field="meta.destination_port"
            header="Destination Port"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          />
          <Column
            field="data.via_pol"
            header="Via Port"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="meta.load_type"
            header="Load Type"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.contract_number"
            header="Contract Number"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.transit_time"
            header="Transit Time"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="other_charges"
            header="Other Charges"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.service_type"
            header="Service Type"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.inclusions"
            header="Inclusions"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.if_pplicable_charges"
            header="If Applicable Charges"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.remarks"
            header="Remarks"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="meta.start_date"
            header="Start Date"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.expiry"
            header="Expiry Date"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.via_pol"
            header="Via Pol"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.via_pod"
            header="Via Pod"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.cargo_type"
            header="Cargo Type"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.commodity"
            header="Commodities"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="summation"
            header="Summation"
            editor={(options) => textEditor(options)}
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column> */}
        </DataTable>
      </div>
    </div>
  );
};
export default Table;
