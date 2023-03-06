
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Calendar } from 'primereact/calendar';
import { Rating } from 'primereact/rating';


const MoviesDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const imageTemplate0 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.title}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const calendarTemplate3 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.year)} showTime ></Calendar>
    const ratingTemplate5 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.rating} cancel={false}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="image" header="image" body={imageTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="title" header="title" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="description" header="description" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="year" header="year" body={calendarTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="rating" header="rating" body={ratingTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default MoviesDataTable;