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
    const initialState = {};

    const getInitialStateFromFormChildren = (arrayChildren) => {
      arrayChildren.forEach((child) => {
        if (typeof child?.props?.inputType !== 'undefined') {
          const { name: fieldName, initialValue: fieldValue = '', validators = [] } = child.props;

          initialState[fieldName] = {
            state: { value: fieldValue, isDirty: false },
            validators,
          };
        } else if (typeof child?.props?.children !== 'undefined') {
          getInitialStateFromFormChildren(Children.toArray(child.props.children));
        }
      });
    };

    getInitialStateFromFormChildren(childrenArray);

    formContextActions.initFormState(initialState);
    setInitForm(true);
  }, []);

  return (
    <form
      style={layoutStyle}
      onSubmit={handleSubmit}
      className={style.form}
    >

      {error
        && <ErrorMessage message={error.message} />}

      {initForm
        && children}

    </form>
  );
}

Form.Input = FormInput;
