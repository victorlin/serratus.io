import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 2, title: 'b', year: '1943' },
    { id: 3, title: 'asdf', year: '1983' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' },
    { id: 4, title: 'd', year: '1912' }
];
const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
      <ClearButton type="button" onClick={onClear}>X</ClearButton>
    </>
  );

const Table = () => {
    return (
        <div className="flex flex-col">
            <DataTable
                title="Arnold Movies"
                columns={columns}
                data={data}
                pagination={true}
            />
        </div>
    )
};

export default Table;
