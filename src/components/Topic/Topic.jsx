import './Topic.css'

export const Topic = (props) => {
  return(
    <div className='topic-container'>
      <h3 className='topic-content'>{props.content}</h3>
    </div>
  )
}