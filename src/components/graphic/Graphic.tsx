import { FC } from 'react'
//Echats biblioteca de gráficos
import ReactECharts from 'echarts-for-react'

interface GraphicsParameters {
	titulo: string
	altura: string
	largura: string
	border: string
}
const data: any = []
//função para gerar numeros randomicos e adicionar ao array data
for (let i = 0; i < 6; i++) {
	data.push(Math.floor(Math.random() * (1000 - 100)))
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
							data: data,
							type: 'line',
						},
					],
				}}
			/>
		</div>
	)
}
export default Graphic
