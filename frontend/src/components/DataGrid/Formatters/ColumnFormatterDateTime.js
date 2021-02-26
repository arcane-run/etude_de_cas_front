import moment from 'moment'
import React from 'react';
import PropTypes from 'prop-types';

class DateTimeFormatter extends React.Component{

  render(){
    return(
      <div>
        {this.props.value ? moment(this.props.value).format('DD MMM YYYY, HH:mm:ss'): ''}
      </div>);
  }
};

DateTimeFormatter.propTypes = { value : PropTypes.string.isRequired };

export default DateTimeFormatter;
