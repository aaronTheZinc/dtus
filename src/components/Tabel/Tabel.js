import React from "react"
import { useTable, usePagination } from "react-table"
import { CardFooter, Card, CardHeader, CardBody, FormSelect, Button } from "shards-react"
import "./Tabel.css"

export default function DashBoardTabel({ columns, data, header, useFilters, defaultPageSize }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups if your table have groupings
        page, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function need to called for each row before getting the row props)
        // setFilter // The useFilter Hook provides a way to set the filter
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
    },
        usePagination
    )
    //   Render the UI for your table
    //   - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically

    return (
        <Card small className="mb-4 bg-dark" style={{ width: "100%" }}>
            <CardHeader className="border-bottom">
                <h5 className="m-0 text-white">{header}</h5>
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <table className="table mb-0" {...getTableProps()}>
                    <thead className="bg-dark text-white">
                        {headerGroups.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup.getHeaderGroupProps()} >
                                {headerGroup.headers.map(column => (
                                    index !== 0 ?
                                        <th
                                            style={
                                                {
                                                    fontSize: "12px", textAlign: "center"

                                                }} {...column.getHeaderProps()} className="border-0"
                                        >
                                            {column.render("Header")}
                                        </th> : null
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr key={i} {...row.getRowProps()}>
                                    {row.cells.map(cell =>
                                        <td className="text-white"
                                            key={i}
                                            {...cell.getCellProps()}
                                            style={{ textAlign: "center", fontSize: "15px" }}
                                        >
                                            {cell.render("Cell")}

                                        </td>
                                    )}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter >

                <div className="wrapper">

                    <div id="btns" >

                        <Button size="sm" outline theme="secondary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</Button>{" "}

                        <Button size="sm" outline theme="secondary" onClick={() => previousPage()} disabled={!canPreviousPage}>{"<"}</Button>{" "}

                        <Button size="sm" outline theme="secondary" onClick={() => nextPage()} disabled={!canNextPage}>{">"}</Button>{" "}

                        <Button size="sm" outline theme="secondary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</Button>{" "}

                    </div>

                    <div className="pagef text-white">
                        <span>
                            Page{" "}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{" "}
                        </span>
                    </div>

                    <div>

                        <FormSelect
                            className="bg-dark text-white"
                            size="sm"
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}
                        >
                            {[3, 7, 15].map(pageSizex => (
                                <option className="text-white" key={pageSizex} value={pageSizex}>
                                    Show {pageSizex}
                                </option>
                            ))}

                        </FormSelect>
                    </div>

                </div>
            </CardFooter>
        </Card>
    )
}
