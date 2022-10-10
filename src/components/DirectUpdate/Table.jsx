import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { useSelector } from 'react-redux';

const Table = () => {

  const [expandedRows, setExpandedRows] = useState();
  const [loading, setLoading] = useState(false);

  const {filteredData} = useSelector((state) => state.filter);

  return (
    <div>
      <div className="card">
        <DataTable
          value={filteredData}
          resizableColumns
          columnResizeMode="expand"
          showGridlines
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          dataKey="id"
          paginator
          emptyMessage="No data found."
          className="datatable-responsive"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
          rows={20}
          removableSort
          expandedRows={expandedRows}
          onRowToggle={(event) => setExpandedRows(event.data)}
          editMode="row"
          selectionMode="multiple"
          metaKeySelection={false}
          scrollHeight="650px"
          loading={loading}
        >
          <Column expander />
          <Column
            field="meta.origin_port"
            header="Origin Port"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          />
          <Column
            field="meta.destination_port"
            header="Destination Port"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          />
          <Column
            field="data.via_pod"
            header="Via Port"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="meta.load_type"
            header="Load Type"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.contract_number"
            header="Contract Number"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.transit_time"
            header="Transit Time"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="other_charges"
            header="Other Charges"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.service_type"
            header="Service Type"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.inclusions"
            header="Inclusions"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.if_pplicable_charges"
            header="If Applicable Charges"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.remarks"
            header="Remarks"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="meta.start_date"
            header="Start Date"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.expiry"
            header="Expiry Date"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.via_pol"
            header="Via Pol"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.via_pod"
            header="Via Pod"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.cargo_type"
            header="Cargo Type"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="data.commodity"
            header="Commodities"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            field="summation"
            header="Summation"
            align={"center"}
            style={{ textAlign: "center" }}
            // sortable
          ></Column>
          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default Table;
