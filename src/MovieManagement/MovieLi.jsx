export default function MovieLi(props) {
  return (
    !props.isHidden && (
        //if movie id is within the selected array, give it a selected class
      <div className={`movie-card ${props.selectedMoviesId.includes(props.id) && 'selected'}`} onClick={() => props.onSelect(props.id)}>
        <img src={props.imgUrl} alt="#" />
        <li>
          {props.title} ({props.year}) - {props.genre.charAt(0).toUpperCase() + props.genre.slice(1)}
        </li>
        <button onClick={(e)=> {e.stopPropagation(); alert(props.rating);}}>Click To See Rating</button>
      </div>
    )
  );
}