import React, { Fragment } from "react";
import { connect } from "react-redux"
import { Table, Icon } from 'rsuite';
import {
    deleteEducation
} from "../../actions/profile"



const Education = ({education, deleteEducation})=>{
    const { Column, HeaderCell, Cell } = Table;

    return (
        <Fragment>
        <h3 className="table-header">Education Credentials</h3>
        <div className="table">
            <Table
                data={education}
                bordered
                autoHeight
                cellBordered
            >
                <Column width={200} fixed>
                    <HeaderCell>School</HeaderCell>
                    <Cell dataKey="school" />
                </Column>

                <Column width={250}>
                    <HeaderCell>Degree</HeaderCell>
                    <Cell dataKey="degree" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Feild Of Study</HeaderCell>
                    <Cell dataKey="fieldofstudy" />
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
                    <HeaderCell>Program Description</HeaderCell>
                    <Cell dataKey="description"/>
                </Column>
                <Column width={70} fixed="right">
                    <HeaderCell>Action</HeaderCell>
                    <Cell>
                    {rowData => {
                      function handleAction() {
                        deleteEducation(rowData._id)
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
    deleteEducation
})(Education)