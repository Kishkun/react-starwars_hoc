import React from 'react';

import Spinner from '../spinner/Spinner';

const WithData = (View) => {
  return class extends React.Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default WithData;
