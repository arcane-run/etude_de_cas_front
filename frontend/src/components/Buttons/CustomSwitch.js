import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';


const arcaneOrange = '#E04C2E'

const style = {
  colorSwitchBase: {
    '&$colorChecked': {
      color: arcaneOrange,
      '& + $colorBar': {
        backgroundColor: arcaneOrange,
      },
    },
  },
  colorDisabled: {
    '&$colorChecked': {
      color: '#bdbdbd',
      '& + $colorBar': {
        backgroundColor: '#9e9e9e',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
}

class CustomSwitch extends React.Component {
  render() {
    const { classes } = this.props ;
    return(
          <Switch checked={this.props.checked}
            disabled={this.props.disabled}
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
              disabled: classes.colorDisabled,
            }}
            onChange={this.props.handleChange}/>

    )
  }
}

CustomSwitch.defaultProps ={
  disabled: false,
}


CustomSwitch.propTypes = {
  disabled: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default withStyles(style)(CustomSwitch)
