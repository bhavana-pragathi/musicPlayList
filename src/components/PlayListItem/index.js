import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayListItem = props => {
  const {playListDetails, onClickDelete} = props
  const {id, imageUrl, name, duration, genre} = playListDetails
  const onClickButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-item">
      <div className="image-name-genre">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-icon">
        <p className="duration">{duration}</p>
        <button
          onClick={onClickButton}
          className="delete-button"
          data-testid="delete"
          type="button"
        >
          <AiOutlineDelete style={{color: '#ffffff'}} size={20} />
        </button>
      </div>
    </li>
  )
}

export default PlayListItem
