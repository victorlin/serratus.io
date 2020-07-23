import React from 'react'
import TableViewer from 'react-js-table-with-csv-dl';

const Table = () => {
    const table = [
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 12, name: "Del Piero", position: "ST" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 1, name: "Buffon", position: "GK" }
    ];
    const headers = ["number", "name"];

    return (
        <TableViewer
            title="Lineup"
            content={table}
            headers={headers}
            minHeight={0} maxHeight={400}
            activateDownloadButton={true} filename={"test-dl.csv"}
            searchEnabled={true} caseInsensitive={true}
            pagination={true} maxPagesToDisplay={10}
        />
    )
}

export default Table;
