import React from 'react';

const ListItem = (props) => {
  const {movie, users} = props;
  console.log('ListItem ' + movie)
  console.log(users)
  console.log(users.length)
  if (users.length > 0) { 
    return(
      <div>
      <p>
      <span>The following users favorited {movie}:</span>
  	  </p>
      <ul>{
		users.map(user => {
      		  console.log(user)
			return(<li key={"user-"+user.id}>{user.name}</li>)
		})}
      </ul>
	  </div>
  	)
  } else {
	return(
    	<p><span>No one favorited {movie} :_(</span></p>
    )
  }
}

export default ListItem;