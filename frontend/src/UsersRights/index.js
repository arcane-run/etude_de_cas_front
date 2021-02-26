import React from 'react';
import {
  apiGetUsers,
  apiPutUser,
  apiPostUser
 } from 'userServices';
import { isEqual, capitalize } from 'lodash';
import FormUsersRights from './components/FormUsersRights';
import SettingsUI from 'components/SettingsUI';
import PropTypes from 'prop-types';
import update from 'immutability-helper/index';

const columnsUsersRightsDataGrid = [
  {
    key: 'name',
    name: 'Name ',
    resizable: true,
    filterable: true,
    sortable: true,
    width: 150
  },
  {
    key: 'email',
    name: 'Email adress ',
    resizable: true,
    filterable: true,
    sortable: true,
    width: 150
  },
  {
    key: 'role',
    name: 'Role',
    resizable: true,
    filterable: true,
    sortable: true
  },
  {
    key: 'clients',
    name: 'Authorized Clients',
    resizable: true,
    filterable: true,
    sortable: true
  }
];

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {
        "Admin": {
          "admin_tools": 3,
          "adscale_datalab": 3,
          "adscale_gtp": 3,
          "adscale_media": 3,
          "ams_feed": 3,
          "ams_gtp": 3,
          "ams_lab": 3,
          "ams_media": 3,
          "fda": 3,
          "users": 3
        },
        "Consultant": {
          "admin_tools": 2,
          "adscale_datalab": 2,
          "adscale_gtp": 2,
          "adscale_media": 2,
          "ams_feed": 2,
          "ams_gtp": 2,
          "ams_lab": 2,
          "ams_media": 2
        },
        "Consultant Admin": {
          "admin_tools": 2,
          "adscale_datalab": 2,
          "adscale_gtp": 2,
          "adscale_media": 2,
          "ams_feed": 2,
          "ams_gtp": 2,
          "ams_lab": 2,
          "ams_media": 2,
          "users": 3
        }
      },
      features: [
        "adscale_media",
        "admin_tools",
        "ams_feed",
        "adscale_datalab",
        "ams_media",
        "adscale_gtp",
        "ams_gtp",
        "ams_lab",
        "users"
      ],
      clientsRightIdMapping: {
        "_myfashion_shop": "_my",
        "afflelou": "aff",
        "alltricks": "llt",
        "appear_here": "app",
        "arcane": "arc",
        "auroremarket": "aur",
        "aviva_fr": "viv",
        "shopix": "sho",
        "tartine_et_chocolat": "tar",
        "training_company": "tra",
        "white_bird": "whi",
        "yse": "yse"
      }
    };
  }

  computeRole = (features_rights, roles) => {
    for (let role in roles) {
      if (isEqual(features_rights, roles[role])) {
        return role;
      }
    }
    return 'Custom';
  };

  dataFormatterUsersRights = (userRights) => {
    const rows = [];
    userRights.forEach(user => {
      if (!user.email) {
        return;
      }
      let role = this.computeRole(user.claims.features_rights, this.state.roles);
      let authorizedClients = [];
      if (!user.claims.authorized_clients) {
        authorizedClients = []
      } else if (isEqual(user.claims.authorized_clients, ['all'])) {
        authorizedClients = ['All Clients'];
      } else {
        if (this.state.clientsRightIdMapping !== undefined && Object.keys(this.state.clientsRightIdMapping).length > 0) {
          authorizedClients = user.claims.authorized_clients.map(right_id => Object.keys(this.state.clientsRightIdMapping).find(client_id => this.state.clientsRightIdMapping[client_id] === right_id))
          authorizedClients = authorizedClients.filter(client_id => client_id !== undefined);
          authorizedClients = authorizedClients.map(client_id => capitalize(client_id.replace(/_/g, ' ')))
        }
        else {
          user.claims.authorized_clients.map(right_id => authorizedClients.push(capitalize(right_id.replace(/_/g, ' '))));
        }
      }

      rows.push(
        update(userRights, {
          $merge: {
            name: user.name,
            email: user.email,
            role: role,
            clients: authorizedClients.join(', '),
            id: user.id
          }
        })
      );
    });
    return rows;
  };

  render() {
    return (
        <SettingsUI
            apiGetSettings={apiGetUsers}
            apiPutSettings={apiPutUser}
            apiPostSettings={apiPostUser}
            gridColumns={columnsUsersRightsDataGrid}
            dataFormatter={this.dataFormatterUsersRights}
            formNamePlaceholder='Name'
            keyIndexName='id'
      >
           {(editedSetting, handleChangeForm) => (
                <FormUsersRights
                    editedSetting={editedSetting}
                    handleChangeForm={handleChangeForm}
                    clients={this.props.clients}
                    clientsRightIdMapping={this.state.clientsRightIdMapping}
                    features={this.state.features}
                    roles={this.state.roles}
                    importsList={this.state.importsList}
                    channelsList={this.state.channelsList}
                    location={this.props.location}
                    getUsersRights={this.getUsersRights}
                    computeRole={this.computeRole}
          />
        )}
      </SettingsUI>
    );
  }
}

Settings.propTypes = {
  clients: PropTypes.array.isRequired,
  location: PropTypes.object
};

export default Settings;
