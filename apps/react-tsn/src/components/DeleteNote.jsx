import React from 'react';
import {useMutation} from '@apollo/client';
import {useNavigate} from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';
// import the DELETE_NOTE mutation
import {DELETE_NOTE} from '../gql/mutation';
// import queries to refetch after note deletion
import {GET_MY_NOTES, GET_NOTES} from '../gql/query';

const DeleteNote = (props) => {
  const navigate = useNavigate();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId,
    },
    // refetch the note list queries to update the cache
    refetchQueries: [{query: GET_MY_NOTES, GET_NOTES}],
    onCompleted: (data) => {
      // redirect the user to the "my notes" page
      navigate('/mynotes');
    },
  });
  return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>;
};
export default DeleteNote;
