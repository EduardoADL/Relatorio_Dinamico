import './LandingPage.css'
import { useState, useRef, useEffect } from 'react'
//dropzone serve para adicionar imagens
import { Dropzone, FileWithPath } from '@mantine/dropzone'
//draggable torna elementos deslizaveis
import Draggable from 'react-draggable'
import { Modal, Checkbox, Button } from '@mantine/core'
import Graphic from '../components/graphic/Graphic'
//react-to-print serve para a impressão
import ReactToPrint from 'react-to-print'

interface componentSettings {
	largura: string
	altura: string
	borda: boolean
	larguraBorda: string
	titulo: string
}

const LandingPage = () => {
	const [opened, setOpened] = useState(false)
	const [openGraphic, setOpenGraphic] = useState(false)
	const [openImage, setOpenImage] = useState(false)
	const [file, setFile] = useState<FileWithPath[]>([])
	const [filePath, setFilePath] = useState('')
	const [filePathUpload, setFilePathUpload] = useState('')
	const [imgSettings, setImgSettings] = useState<componentSettings>({
		largura: '',
		altura: '',
		borda: false,
		larguraBorda: '',
		titulo: '',
	})

	const [graphicSettings, setGraphicSettings] = useState<componentSettings>({
		largura: '',
		altura: '',
		borda: false,
		larguraBorda: '',
		titulo: '',
	})

	const openRef: any = useRef()
	const printRef: any = useRef()

	//useEffect feito para setar o caminho da imagem
	useEffect(() => {
		if (file.length === 0 || !file) return
		setFilePath(URL.createObjectURL(file[0]))
	}, [file])

	//useEffect feito para definir largura da borda como 0 caso o usuario desmarque a checkbox
	useEffect(() => {
		if (!imgSettings.borda) {
			setImgSettings({ ...imgSettings, larguraBorda: '0' })
		} else return
	}, [imgSettings.borda])
	useEffect(() => {
		if (!graphicSettings.borda) {
			setGraphicSettings({ ...graphicSettings, larguraBorda: '0' })
		} else return
	}, [graphicSettings.borda])

	function saveModal() {
		setFilePathUpload(filePath)
		setOpened(false)
	}

	return (
		<div className='container'>
			<div className='buttons'>
				<Button
					className='button'
					variant='gradient'
					gradient={{ from: 'indigo', to: 'cyan' }}
					onClick={() => setOpened(true)}
				>
					Adicionar
				</Button>
				<ReactToPrint
					trigger={() => {
						return (
							<Button
								className='button'
								variant='gradient'
								gradient={{ from: 'teal', to: 'lime', deg: 105 }}
							>
								Imprimir
							</Button>
						)
					}}
					content={() => printRef.current}
				/>
			</div>
			<div className='A4Paper'>
				<div ref={printRef}>
					{openImage ? (
						<Draggable>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
									justifyContent: 'center',
									flexDirection: 'column',
									zIndex: 100,
								}}
							>
								<p className='titleImg'>{imgSettings.titulo}</p>
								<img
									id='img'
									style={{
										width: imgSettings.largura + 'px',
										height: imgSettings.altura + 'px',
										border: imgSettings.larguraBorda + 'px solid black',
									}}
									draggable={false}
									className='img'
									src={filePathUpload}
									alt='imagem'
								/>
							</div>
						</Draggable>
					) : null}
					{openGraphic ? (
						<Draggable>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
									justifyContent: 'center',
									flexDirection: 'column',
									zIndex: 50,
								}}
							>
								<Graphic
									titulo={graphicSettings.titulo}
									altura={graphicSettings.altura}
									largura={graphicSettings.largura}
									border={graphicSettings.larguraBorda}
								/>
							</div>
						</Draggable>
					) : null}
				</div>
			</div>
			<div>
				{/* COMEÇO DO MODAL */}
				<Modal
					opened={opened}
					onClose={() => setOpened(false)}
					title='Configure seus componentes'
					size='auto'
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							flexDirection: 'row',
						}}
					>
						<div className='ImageOptions'>
							<Checkbox
								label='Imagem'
								checked={openImage}
								onChange={(checado) =>
									setOpenImage(checado.currentTarget.checked)
								}
							/>
							<div>
								<p className='titleInput'>Título da Imagem</p>
								<input
									className='input'
									value={imgSettings.titulo}
									onChange={(text) =>
										setImgSettings({
											...imgSettings,
											titulo: text.target.value,
										})
									}
									type='text'
								/>
							</div>
							<div>
								<p className='titleInput'>Largura(px)</p>
								<input
									className='input'
									value={imgSettings.largura}
									onChange={(text) =>
										setImgSettings({
											...imgSettings,
											largura: text.target.value,
										})
									}
									type='number'
								/>
							</div>
							<div>
								<p className='titleInput'>Altura(px)</p>
								<input
									className='input'
									value={imgSettings.altura}
									onChange={(text) =>
										setImgSettings({
											...imgSettings,
											altura: text.target.value,
										})
									}
									type='number'
								/>
							</div>
							<div>
								<p className='titleInput'>Borda?</p>
								<Checkbox
									checked={imgSettings.borda}
									onChange={(checado) =>
										setImgSettings({
											...imgSettings,
											borda: checado.currentTarget.checked,
										})
									}
								/>
							</div>
							{imgSettings.borda ? (
								<div>
									<p className='titleInput'>Tamanho borda(px)</p>
									<input
										className='input'
										value={imgSettings.larguraBorda}
										onChange={(text) =>
											setImgSettings({
												...imgSettings,
												larguraBorda: text.target.value,
											})
										}
										type='number'
									/>
								</div>
							) : null}

							<div className='Image'>
								<Dropzone
									onDrop={(files) => {
										setFile(files)
									}}
									openRef={openRef}
									accept={{
										'image/*': [],
									}}
								>
									<div style={{ width: '150px' }}>
										{filePath ? (
											<img
												id='img'
												className='img'
												src={filePath}
												alt='imagem'
											/>
										) : (
											<p className='titleInput'>Arraste uma imagem</p>
										)}
									</div>
								</Dropzone>
							</div>

							<Button onClick={() => openRef.current()}>
								Selecionar uma Imagem
							</Button>
						</div>
						<div className='GraphicOptions'>
							<Checkbox
								label='Gráfico'
								checked={openGraphic}
								onChange={(checado) =>
									setOpenGraphic(checado.currentTarget.checked)
								}
							/>
							<div>
								<p className='titleInput'>Título do gráfico</p>
								<input
									className='input'
									value={graphicSettings.titulo}
									onChange={(text) =>
										setGraphicSettings({
											...graphicSettings,
											titulo: text.target.value,
										})
									}
									type='text'
								/>
							</div>
							<div>
								<p className='titleInput'>Largura(px)</p>
								<input
									className='input'
									value={graphicSettings.largura}
									onChange={(text) =>
										setGraphicSettings({
											...graphicSettings,
											largura: text.target.value,
										})
									}
									type='number'
								/>
							</div>
							<div>
								<p className='titleInput'>Altura(px)</p>
								<input
									className='input'
									value={graphicSettings.altura}
									onChange={(text) =>
										setGraphicSettings({
											...graphicSettings,
											altura: text.target.value,
										})
									}
									type='number'
								/>
							</div>
							<div>
								<p className='titleInput'>Borda?</p>
								<Checkbox
									checked={graphicSettings.borda}
									onChange={(checado) =>
										setGraphicSettings({
											...graphicSettings,
											borda: checado.currentTarget.checked,
										})
									}
								/>
							</div>
							{graphicSettings.borda ? (
								<div>
									<p className='titleInput'>Tamanho borda(px)</p>
									<input
										className='input'
										value={graphicSettings.larguraBorda}
										onChange={(text) =>
											setGraphicSettings({
												...graphicSettings,
												larguraBorda: text.target.value,
											})
										}
										type='number'
									/>
								</div>
							) : null}
						</div>
					</div>
					<Button
						style={{ marginLeft: '80%' }}
						variant='gradient'
						gradient={{ from: 'teal', to: 'lime', deg: 105 }}
						onClick={() => saveModal()}
					>
						Salvar
					</Button>
				</Modal>
			</div>
		</div>
	)
}
export default LandingPage
