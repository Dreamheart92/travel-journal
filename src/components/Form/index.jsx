import { Children, useContext, useEffect, useRef } from 'react';
import style from './index.module.css';
import TextInput from './Input/TextInput';
import { FormContext } from '../../context/FormContext';

export default function Form({ children }) {
  const { setFormInitialState, isValidForm } = useContext(FormContext);
  const initFormState = useRef(false);

  useEffect(() => {
    const childrenArray = Children.toArray(children);

    const initialState = childrenArray.reduce((state, child) => {
      if (child.type.name === 'Button') {
        return state;
      }

      const fieldName = child.props.name;
      const fieldValue = child.props?.initialValue || '';
      const validators = child.props?.validators || [];

      return {
        ...state,
        [fieldName]: {
          state: { value: fieldValue, isDirty: false },
          validators,
        },
      };
    }, {});

    setFormInitialState(initialState);
    initFormState.current = true;
  }, []);
    </form>
  );
}
