import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@material-ui/core';



const DismissDialog = (props) =>


    <div>
        <Dialog open={props.isOpen}>
            <DialogTitle>
                <Typography variant='title' style={{ fontSize: 16 }}>
                    Dismiss issue?
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{ fontSize: 14 }}>
                    If you dismiss this issue, you will no longer be able to see it and receive notifications about it

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseDismiss} color='secondary'>
                    CANCEL
                </Button>
                <Button onClick={props.handleDismiss} color='primary'>
                    DISMISS
                </Button>
            </DialogActions>
        </Dialog>
    </div>
;


DismissDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseDismiss: PropTypes.func.isRequired,
    handleDismiss: PropTypes.func.isRequired
}


export default DismissDialog;
