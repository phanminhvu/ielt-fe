import React from 'react';
import { Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material"

type Props = {
    header: string[];
    data: any;
}

const TableCustom = (props: Props) => {
    const { header, data } = props
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {header.map((el, index) => (
                        <TableCell key={index}>el</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data ? data.map((el: any, index: number) => (
                    <TableRow hover key={index} sx={{ borderBottom: "1px solid #ccc" }}>
                        <TableCell>1</TableCell>
                        <TableCell>{el?.bandScore}</TableCell>
                        <TableCell>{el?.name}</TableCell>
                        <TableCell>{el.sessionDate}</TableCell>
                    </TableRow>
                )) : "No result"}
            </TableBody>
        </Table>
    )
}

export default TableCustom