import React, { Fragment } from "react";
import { connect } from "react-redux"
import { Table, Icon } from 'rsuite';
import {
    deleteExperience
} from "../../actions/profile"



const Experience = ({experience, deleteExperience})=>{
    const { Column, HeaderCell, Cell } = Table;

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
                <Column width={200} >
                    <HeaderCell>Current</HeaderCell>
                    <Cell dataKey="current" />
                </Column>
                <Column width={500} resizable>
                    <HeaderCell>Description</HeaderCell>
                    <Cell dataKey="description"/>
                </Column>
                <Column width={70} fixed="right">
                    <HeaderCell>Action</HeaderCell>
                    <Cell>
                    {rowData => {
                      function handleAction() {
                        deleteExperience(rowData._id)
                      }
                      return (
                        <span>
                          <a onClick={handleAction}> <Icon icon="trash-o"/> </a>
                        </span>
                      );
                    }}
                  </Cell>
                </Column>
            </Table>
      </div>
      </Fragment>
    )
}


export default connect(null, {
    deleteExperience
})(Experience)