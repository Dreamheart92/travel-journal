import { useDispatch, useSelector } from 'react-redux';
import { selectReadState } from '../store/crud/selectors';
import { sendLoginRequest } from '../store/crud/services';
import crudKeys from '../store/crud/types';
import crudActionsConstants from '../constants/crudActionsConstants';
import { constructLoginData } from '../forms/helpers/loginForm';

const useRead = () => {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    success,
    error,
  } = useSelector(selectReadState);

  return {
    data,
    loading,
    success,
    error,
  };
};

export default useRead;
