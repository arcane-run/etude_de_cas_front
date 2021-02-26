import React from 'react';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import ParameterDataGrid from './components/ParameterDataGrid';
import FormDialog from 'components/Dialogs/FormDialog';
import ErrorDialog from '../Dialogs/ErrorDialog';
import LoadingDialog from '../Dialogs/LoadingDialog';
import DeleteDialog from '../Dialogs/DeleteDialog';
import SaveDialog from '../Dialogs/SaveDialog';

const superpose = {
    position: 'relative',
    top: '-70px',
    marginRight: 15,
    float: 'right',
    align: 'center',
    background: '#E04C2E',
};

const View = (props) =>
    <div>

        <LoadingDialog isOpen={props.isLoading} />

        <Grid container style={{ padding: 20, width: '100%' }}>

            <FormDialog
                activationButton={props.activationButton}
                isOpen={props.isSettingDialogOpen}
                action={props.action}
                namePlaceholder={props.formNamePlaceholder}
                handleCloseDialogForm={props.handleCloseDialogForm}
                updateSetting={props.updateSetting}
                postSetting={props.postSetting}
                handleDeleteDialog={props.handleDeleteDialog}
                editedSetting={props.editedSetting}
                handleChangeForm={props.handleChangeForm}
                isButtonSaveEnabled={props.isButtonSaveEnabled}
                hideDeleteButton={props.hideDeleteButton}
            >
                {props.children(
                    props.editedSetting,
                    props.handleChangeForm,
                    props.handleApiCall,
                    props.settingsList,
                    props.enableButtonSave
                )}

            </FormDialog>

            <ErrorDialog
                errorDialog={props.errorDialog}
                errorDetails={props.errorDetails}
                handleCloseError={props.handleCloseError}
            />

            <DeleteDialog
                isOpen={props.deleteDialog}
                object={'settings'}
                handleDelete={props.deleteSetting}
                handleCloseDelete={props.handleCloseDelete}>

            </DeleteDialog>

            <SaveDialog
                isOpen={props.isSaveDialogOpen}
                handleLeave={props.handleLeave}
                handleStay={props.handleStay}
            />


            <Grid item xs={12}>
                <ParameterDataGrid
                    rows={props.dataFormatter(props.settingsList)}
                    gridColumns={props.gridColumns}
                    height={props.height}
                    onRowClick={props.openEditSettingDialog}
                    rowFormatter={props.rowFormatter}
                    keyIndexName={props.keyIndexName}
                />
                <Button
                    variant='fab'
                    aria-label='add'
                    color='primary'
                    style={superpose}
                    onClick={props.openAddSettingDialog}>
                    <AddIcon />
                </Button>
            </Grid>
        </Grid>

    </div>

export default View;
