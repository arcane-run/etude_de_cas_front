import React from 'react';
import logo from './logo_arcane_small.png';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const orange = {
    color: '#E04C2E',
}

const modalStyle = {
    position: 'absolute',
    top: `45%`,
    left: `45%`,
    height: 136,
    width: 136,
    backgroundColor: '#fff',
}


const LoadingDialog = (props) =>
    <div>
    <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          disableAutoFocus
          open={props.isOpen}

        >
        <div style={modalStyle}>
            <div style={{ marginLeft:40, marginTop:45 }}>
                <img src={logo} height='45' alt='logo Arcane'/>
                <div style={{ marginLeft:-25, marginTop:-75 }}>
                    <CircularProgress size={105} style={orange} />
                </div>
            </div>
        </div>
    </Modal>

    </div>
;

LoadingDialog.propTypes = {
    isOpen: PropTypes.bool,
};


export default LoadingDialog;
