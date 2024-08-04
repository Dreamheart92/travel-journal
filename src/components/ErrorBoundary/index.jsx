import React from 'react';
import ErrorModule from '../../modules/ErrorModule';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorModule />;
    }

    return this.props.children;
  }
}
