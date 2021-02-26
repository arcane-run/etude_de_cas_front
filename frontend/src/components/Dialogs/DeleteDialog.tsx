import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@material-ui/core';

interface DeleteDialogProps {
    isOpen: boolean
    object: string
    customMessage?: string
    handleCloseDelete: () => void
    handleDelete: () => void
}

const DeleteDialog = (props: DeleteDialogProps) =>


    <div>
        <Dialog open={props.isOpen}>
            <DialogTitle>
                <Typography variant='title' style={{ fontSize: 16 }}>
                    Delete 
                    {' '}
                    {props.object}
                    {' '}
?
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{ fontSize: 14 }}>
                    { props.customMessage ?
                        props.customMessage : `Deleting this ${props.object} permanently removes it.`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseDelete} color='secondary'>
                    CANCEL
                </Button>
                <Button onClick={props.handleDelete} color='primary'>
                    DELETE
                </Button>
            </DialogActions>
        </Dialog>
    </div>
;


export default DeleteDialog;
