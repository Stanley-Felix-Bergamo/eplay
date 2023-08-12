//React
import { useState } from 'react'

//Styles
import { Item, Itens, Action, Modal, ModalContent } from './styles'

//Imagens
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'

//Pages

type Props = {
  defaultCover: string
  name: string
  items?: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Itens>
        {items?.map((media, index) => (
          <Item
            key={media.url}
            onClick={() => {
              setModal({
                isVisible: true,
                type: media.type,
                url: media.url
              })
            }}
          >
            <img
              src={getMediaCover(media)}
              alt={`Mída ${index + 1} de ${name}`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt="Clique para maximar a Midia"
              />
            </Action>
          </Item>
        ))}
      </Itens>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
