import {
  Children,
  useEffect,
  useState,
} from 'react';

import style from './index.module.css';
import ErrorMessage from '../ErrorMessage';
import FormInput from './Input/FormInput';
import { useFormContext } from '../../context/FormContext';

export default function Form(
  {
    children,
    submitCallback,
    error,
    layoutStyle,
  },
) {
  const [initForm, setInitForm] = useState(false);
  const { formContextActions, formContextSelectors } = useFormContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    formContextActions.onSubmit();

    if (formContextSelectors.isValidForm()) {
      const formData = Object.entries(formContextSelectors.formState())
        .reduce((form, [fieldName, fieldData]) => {
          const { value: fieldValue } = fieldData.state;
          return {
            ...form,
            [fieldName]: fieldValue,
          };
        }, {});

      submitCallback(formData);
    }
  };

  useEffect(() => {
    const childrenArray = Children.toArray(children);

    const initialState = childrenArray.reduce((state, child) => {
      if (child.type.name === 'Button') {
        return state;
      }

      const { name: fieldName, fieldValue = '', validators = [] } = child.props;

      return {
        ...state,
        [fieldName]: {
          state: { value: fieldValue, isDirty: false },
          validators,
        },
      };
    }, {});

    formContextActions.initFormState(initialState);
    setInitForm(true);
  }, []);

  return (
    <form className={style.form}>
      {initFormState.current
        && children}
    </form>
  );
}

Form.Text = TextInput;
