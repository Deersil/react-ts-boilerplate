import * as React from 'react';
import { PolarAngleAxis, RadialBarChart, RadialBar } from 'recharts';
import styled from 'styled-components';
import TextBlock from './TextBlock';

const Wrapper = styled.div`
	display: flex;
	flex: 1 0;
	margin-top: 18px;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
`;

interface IProps {
	isVsAll?: boolean;
	name?: string | null;
	value: number;
}

const getLabel = (data: any) => (value: any) => (
	<text
		id="text-score"
		key={value.cx}
		x={value.viewBox.cx}
		y={value.viewBox.cy + 19}
		textAnchor="middle"
		fill="#2C82BE"
		fontSize={52.4375}
	>
		{data[value.index].value}
	</text>
);

const ScoreChart: React.SFC<IProps> = ({ value, name, isVsAll }) => {
	const data = [{ value, fill: '#2C82BE' }];

	return (
		<Wrapper>
			<RadialBarChart
				width={110}
				height={110}
				cx="50%"
				cy="50%"
				innerRadius={50}
				outerRadius={62}
				startAngle={90}
				endAngle={-270}
				data={data}
			>
				<PolarAngleAxis
					type="number"
					// @ts-ignore
					domain={[0, 100]}
					dataKey={'value'}
					angleAxisId={0}
					tick={false}
				/>
				<RadialBar dataKey="value" label={getLabel(data)} background={{ fill: '#DBECF8' }} cornerRadius={5} />
			</RadialBarChart>
			<TextBlock name={name} isVsAll={isVsAll} />
		</Wrapper>
	);
};

ScoreChart.defaultProps = {
	isVsAll: false,
	name: null,
	value: 0
};

export default ScoreChart;
