import * as React from 'react';
import { PolarAngleAxis, RadialBarChart, RadialBar } from 'recharts';

const ScoreChart = () => {
	const data = [{ value: 50, fill: '#2C82BE' }];
	let label = (t: any) => {
		return (
			<text
				id="text-score"
				key={t.cx}
				x={t.viewBox.cx}
				y={t.viewBox.cy + 19}
				textAnchor="middle"
				fill="#2C82BE"
				fontSize={52.4375}
			>
				{data[t.index].value}
			</text>
		);
	};
	return (
		<RadialBarChart
			width={107.75}
			height={108.75}
			cx="50%"
			cy="50%"
			innerRadius={50}
			outerRadius={62}
			startAngle={90}
			endAngle={-270}
			data={data}
			style={{ display: 'inline-block' }}
		>
			<PolarAngleAxis type="number" domain={[0, 100]} dataKey={'value'} angleAxisId={0} tick={false} />
			<RadialBar dataKey="value" label={label} background={{ fill: '#DBECF8' }} cornerRadius={5} />
		</RadialBarChart>
	);
};

export default ScoreChart;
