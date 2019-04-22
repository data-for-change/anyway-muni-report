import React from "react";
import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ data, legendX = '', legendY='' }) => (
    <ResponsiveLine
        data={data}
        margin={{
            "top": 20,
            "right": 50,
            "bottom": 100,
            "left": 50
        }}
        xScale={{
            "type": "point"
        }}
        yScale={{
            "type": "linear",
            "stacked": true,
            "min": "auto",
            "max": "auto"
        }}

        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": legendX,
            "legendOffset": 36,
            "legendPosition": "middle"
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 15,
            "tickRotation": 0,
            "legend": legendY,
            "legendOffset": -40,
            "legendPosition": "middle"
        }}
        colors={{
            "scheme": "nivo"
        }}
        dotSize={10}
        dotColor={{
            "theme": "background"
        }}
        dotBorderWidth={2}
        dotBorderColor={{
            "from": "color"
        }}
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 100,
                "translateY": 0,
                "itemsSpacing": 0,
                "itemDirection": "left-to-right",
                "itemWidth": 80,
                "itemHeight": 20,
                "itemOpacity": 0.75,
                "symbolSize": 12,
                "symbolShape": "circle",
                "symbolBorderColor": "rgba(0, 0, 0, .5)",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemBackground": "rgba(0, 0, 0, .03)",
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart;