import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*
import StarRating from './StarRating'

function Test() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating color={'green'} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}
*/

/*
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating
      size={24}
      color={'red'}
      maxRating={10}
      className={'test'}
      defaultRating={3}
    />
    <Test />
*/
