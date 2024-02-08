import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useQuery} from '@apollo/client';

import styled from 'styled-components';
import Note from '../components/Note';
import {GET_NOTE} from '../gql/query';

const NoteWrapper = styled.div` 
	max-width: 800px;
	margin: 0 auto;
	margin-bottom: 2em; 
	padding-bottom: 2em; 
	border-bottom: 1px solid #fca311;
`;

// query hook, passing the id value as a variable

const NotePage = (props) => {
  const {id} = useParams();
  const {loading, error, data} = useQuery(GET_NOTE, {variables: {id}});

  if (loading)
  // if the data is loading, display a loading message

  {
    return <p>Loading...</p>;
  }
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;

  return (
    <NoteWrapper>
      <div>
        <p>ID: {id}</p>
      </div>
      <Note note={data.note} />
      <Link to={`/note/${id}`}>Permalink</Link>
    </NoteWrapper>
  );
};

export default NotePage;
