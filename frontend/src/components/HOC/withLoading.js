import React from "react";
const withLoading = (neededProp, WrappedComponent) => {
  return class WithLoadingComponent extends React.Component {
    render() {
      if (this.props[neededProp].length > 0)
        return <WrappedComponent {...this.props} />;
      else
        return (
          <h1 className='text-center text-muted mt-5'>
            <i className='fa fa-cog fa-spin'></i> Cargando...
          </h1>
        );
    }
  };
};
export default withLoading;
