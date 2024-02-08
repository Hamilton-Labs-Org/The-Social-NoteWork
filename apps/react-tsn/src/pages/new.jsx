import React, {useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {useNavigate} from 'react-router-dom';
// import the NoteForm component
import NoteForm from '../components/NoteForm';

import {GET_MY_NOTES, GET_NOTES} from '../gql/query';
import {NEW_NOTE} from '../gql/mutation';

// within the NewNote component update the mutation
// everything else stays the same

const NewNote = (props) => {
  useEffect(() => {
    // update the document title
    document.title = 'New Note - NoteWork';
  });

  const navigate = useNavigate();
  const [data, {loading, error}] = useMutation(NEW_NOTE, {
    // refetch the GET_NOTES and GET_MY_NOTES queries to update the cache
    refetchQueries: [{query: GET_MY_NOTES}, {query: GET_NOTES}],
    onCompleted: (data) => {
      // when complete, redirect the user to the note page
      navigate(`/note/${data.newNote.id}`);
    },
  });

  return (
    <>
      {/* as the mutation is loading, display a loading message*/}
      {loading && <p>Loading...</p>}
      {/* if there is an error, display a error message*/}
      {error && <p>Error saving the note</p>}
      {/* the form component, passing the mutation data as a prop */}
      <NoteForm action={data} />
    </>
  );
};

export default NewNote;
