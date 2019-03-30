import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


export default class Chart extends Component {

    render () {
        const { title, data, type} = this.props;

        const options = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type
        },
            title: {
              text: title
            },
            series: [{
              data,
              keys: ["y", "name"],
            }],
            colors: ['#433A3F', '#0FD3E9', '#3D5A6C', '#0BC7B4', '#132F75',
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
            plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  }
              }
          },
          }


        
        return   <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    }

}




