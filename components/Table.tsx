"use client"
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const STATS = [
    {
        name: 'Stats 1',
        value: 100,
        color: '#FF0080'
    },
    {
        name: 'Stats 2',
        value: 200,
        color: '#FF0080'
    },
    {
        name: 'Stats 3',
        value: 300,
        color: '#FF0080'
    },
]


const TableStats = () => {
  return (
    <Table aria-label="Example static collection table" className='w-[90dvw] mt-10 mb-20' >
      <TableHeader>
        <TableColumn>NUME</TableColumn>
        <TableColumn>VALOARE</TableColumn>
        <TableColumn>CULOARE</TableColumn>
      </TableHeader>
      <TableBody>
        {STATS.map((stat) => (
            <TableRow key={stat.name}>
                <TableCell>{stat.name}</TableCell>
                <TableCell>{stat.value}</TableCell>
                <TableCell>{stat.color}</TableCell>
            </TableRow>
        ))}

      </TableBody>
    </Table>

  )
}

export default TableStats