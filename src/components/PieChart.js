import React from 'react';
import { ResponsivePie } from 'nivo';

const Chart = ({ data }) => {
  //create a fill pattern (dots or line) for every third pie slice
  const createFillPattern = data => {
    let fill = [];
    data.forEach((d, i) => {
      if (i % 3 === 0 && i % 2 === 0) {
        fill.push({
          match: {
            id: `${data[i].id}`
          },
          id: 'dots'
        });
      } else if (i % 3 === 0) {
        fill.push({
          match: {
            id: `${data[i].id}`
          },
          id: 'lines'
        });
      }
    });
    return fill;
  };

  return (
    //requires data to be in the format {id, value, label}
    <ResponsivePie
      data={data}
      margin={{
        top: 40,
        right: 80,
        bottom: 80,
        left: 80
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors="set3"
      colorBy="id"
      borderWidth={1}
      borderColor="inherit:darker(0.2)"
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor="inherit"
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={createFillPattern(data)}
    />
  );
};

export default Chart;
