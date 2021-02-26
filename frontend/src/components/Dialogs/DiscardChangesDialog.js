import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';



const DiscardChangesDialog = (props) =>


    <div>
        <Dialog open={props.isOpen}>
            <DialogTitle>
                Discard changes?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    If you go back now, all your changes will not be taken into account.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color='primary'>
                    CANCEL
                </Button>
                <Button onClick={props.handleDiscard} color='primary'>
                    DISCARD
                </Button>
            </DialogActions>
        </Dialog>
    </div>
;

DiscardChangesDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDiscard: PropTypes.func.isRequired,
};

export default DiscardChangesDialog;
