import React, { Fragment } from "react";

import { Table, Icon } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;


const Experience = ({experience})=>{
    const onDelete = ()=>{

    }
    return (
        <Fragment>
        <h3 className="table-header">Experience Credentials</h3>
        <div className="table">
            <Table
                data={experience}
                bordered
                autoHeight
                cellBordered
            >
                <Column width={200} fixed>
                    <HeaderCell>Title</HeaderCell>
                    <Cell dataKey="title" />
                </Column>

                <Column width={250}>
                    <HeaderCell>Company</HeaderCell>
                    <Cell dataKey="company" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Location</HeaderCell>
                    <Cell dataKey="location" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Start Date</HeaderCell>
                    <Cell dataKey="from" />
                </Column>

                <Column width={200}>
                    <HeaderCell>End Date</HeaderCell>
                    <Cell dataKey="to" />
                </Column>

                <Column width={500} >
                    <HeaderCell>Description</HeaderCell>
                    <Cell dataKey="description" />
                </Column>
                <Column width={70} fixed="right">
                    <HeaderCell>Action</HeaderCell>
                    <Cell>
                        <span style={{"cursor":"pointer"}}>
                            <a onClick={onDelete}> <Icon icon="trash-o"/> </a>
                        </span>
                    </Cell>
                </Column>
            </Table>
      </div>
      </Fragment>
    )
}


export default Experience