import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import crudKeys from '../../store/crud/types';
import { crudActions } from '../../store/crud/index';

import SignupForm from '../../modules/AuthModule/Forms/SignupForm';
import AuthModule from '../../modules/AuthModule';

const settings = {
  title: 'Join the Adventure!',
  caption: 'Sign up to create your Travel Journal, share your stories, and explore a world of new destinations with fellow travelers.',
  form: <SignupForm />,
};

export default function Signup() {
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(crudActions.resetState({ key: crudKeys.CREATE })));

  return <AuthModule settings={settings} />;
}
