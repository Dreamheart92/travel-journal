import { Children, useContext, useEffect, useRef } from 'react';
import style from './index.module.css';
import TextInput from './Input/TextInput';
import { FormContext } from '../../context/FormContext';

export default function Form({ children }) {
  const { setFormInitialState, isValidForm } = useContext(FormContext);
  const initFormState = useRef(false);


      {children}
    </form>
  );
}
