import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'
import React, { Component } from 'react'


  

export default class Table extends Component {



    render () {
        const { columns, data } = this.props;

        console.log(columns)
        console.log(data)

        return     <ReactTabulator
        height={205}
        data={data}
        columns={columns}
        tooltips={true}
        layout={"fitData"}
        />
    }



} 