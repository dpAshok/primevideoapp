// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

// import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    // <div>
    //   <Popup trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
    //     {close => (
    //       <div>
    //         <button type="button" onClick={() => close()}>
    //           <IoMdClose />
    //         </button>
    //         <div>
    //           <ReactPlayer url={videoUrl} />
    //         </div>
    //       </div>
    //     )}
    //   </Popup>
    // </div>
    <div>
      <Popup
        modal
        trigger={
          <div className="thumbContainer">
            <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testId="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
