import { FC } from 'react'
import ReactECharts from 'echarts-for-react'

interface GraphicsParameters {
	titulo: string
	altura: string
	largura: string
	border: string
}
const Graphic: FC<GraphicsParameters> = ({
	titulo,
	altura,
	largura,
	border,
}) => {
	return (
		<div
			style={{
				width: largura + 'px',
				height: altura + 'px',
			}}
		>
			<p style={{ fontWeight: 'bold' }}>{titulo}</p>
			<ReactECharts
				style={{
					width: largura + 'px',
					height: altura + 'px',
					border: border + 'px solid black',
					background: 'white',
				}}
				option={{
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					},
					yAxis: {
						type: 'value',
					},
					series: [
						{
							data: [150, 230, 224, 218, 135, 147, 260],
							type: 'line',
						},
					],
				}}
			/>
		</div>
	)
}
export default Graphic
