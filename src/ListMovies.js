import React, { Component } from 'react';
import ListItem from './ListItem';

class ListMovies extends Component {
	render() {
      	const { favorites } = this.props;
    	return(
          <ul>
          {
          	favorites.map(favorite => (
            	<li key={"movie-"+favorite.id}>
					<ListItem movie={favorite.name} users={favorite.users}/>
				</li>
          	))
		  }
          </ul>
        )
    }
}

export default ListMovies;