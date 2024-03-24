import React from 'react';
import Markdown from 'react-markdown';
import {useQuery} from '@apollo/client';

import {format} from 'date-fns';
import styled from 'styled-components';

// import logged in user UI components
import NoteUser from './NoteUser';
// import the IS_LOGGED_IN local query
import {IS_LOGGED_IN} from '../gql/query';

const StyledNote = styled.article`
	max-width: 800px;
	margin: 0 auto;
`;

const MetaData = styled.div`
	@media (min-width: 500px) {
		display: flex;
		align-items: top;
	}
`;

const MetaInfo = styled.div`
	padding-right: 1.5em;
`;

const UserActions = styled.div`
	margin-left: auto;
`;

const Note = ({note}) => {
  const {loading, error, data} = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <em>by</em> {note.author.username}
          <br />
          {format(note.createdAt, 'MMM Do yyyy')}
        </MetaInfo>
        {data.isLoggedIn ? (
          <UserActions>
            <NoteUser note={note} />
          </UserActions>
        ) : (
          <UserActions>
            <em>Favorites:</em> {note.favoriteCount}
          </UserActions>
        )}
      </MetaData>
      <Markdown children={note.content} />
      <br />
    </StyledNote>
  );
};

export default Note;
