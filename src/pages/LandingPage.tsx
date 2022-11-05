import './LandingPage.css'
import { useState, useRef } from 'react'
import { Dropzone, FileWithPath } from '@mantine/dropzone'
import Draggable from 'react-draggable'
import { Modal } from '@mantine/core'
const LandingPage = () => {
	const [opened, setOpened] = useState(false)
	const [file, setFile] = useState<FileWithPath[]>([])
	const [filePath, setFilePath] = useState('')
	const [altura, setAltura] = useState('')
	const openRef: any = useRef()
	const imgCss = document.getElementById('img')
	function saveModal() {
		if (imgCss != null) {
			imgCss.style.width = altura + 'px'
			console.log(altura)
		}
		setOpened(false)

		setFilePath(URL.createObjectURL(file[0]))
	}
	// function addImg(files: any) {
	// 	setFile(files)
	// 	setFilePath(URL.createObjectURL(file[0]))
	// }
	return (
		<div className='container'>
			<div className='A4Paper'>
				{filePath ? (
					<Draggable>
						<img
							id='img'
							draggable={false}
							className='img'
							src={filePath}
							alt='imagem'
						/>
					</Draggable>
				) : null}
			</div>
			<div>
				<button onClick={() => setOpened(true)} className='btnAdc'>
					Adicionar
				</button>
				<Modal
					opened={opened}
					onClose={() => setOpened(false)}
					title='Selecione uam Opção'
				>
					<div>
						<input
							onChange={(text) => setAltura(text.target.value)}
							type='text'
							className='altura'
						/>
					</div>
					<div className='Image'>
						<Dropzone onDrop={(files) => setFile(files)} openRef={openRef}>
							<div>
								{filePath ? (
									<img id='img' className='img' src={filePath} alt='imagem' />
								) : (
									<p>arraste uma imagem</p>
								)}
							</div>
						</Dropzone>
					</div>

					<button onClick={() => openRef.current()}>
						Selecionar uma Imagem
					</button>
					<button onClick={() => saveModal()}>Salvar</button>
				</Modal>
			</div>
		</div>
	)
}
export default LandingPage
