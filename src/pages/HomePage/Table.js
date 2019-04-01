import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactTable from "react-table";

//import styles
import "react-table/react-table.css";

export default class Table extends Component {

    state = {
        height: 0
    }

  componentDidMount() {
      this.setState({height: ReactDOM.findDOMNode(this).parentNode.clientHeight })
  }

  render() {
    const { columns, data } = this.props;
    const { height } = this.state; 

    return (
      <ReactTable
        ref={r => (this.reactTable = r)}
        data={data}
        columns={columns}
        pageSize={data.length > 0 ? data.length : 5}
        showPagination={false}
        minRows={5}
        style={{
          height// This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
        noDataText="No data found"
      />
    );
  }
}
