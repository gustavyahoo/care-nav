import React from 'react';
import { Icon } from 'antd';
import { Link, Route } from 'react-router-dom';
import PatientName from './PatientName';
import NewPatientForm from './NewPatientForm';
import EditPatientForm from './EditPatientForm';

const Patients = props => (
  <div>
    <Route
      exact
      path={`${props.match.url}`}
      render={props => (
        <div
          className="tabs-content-height"
          style={{
            height: props.height
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            .reverse()
            .map(i => (
              <div
                key={i}
                style={{
                  height: 60,
                  backgroundColor: '#a9a9a9',
                  borderBottom: '1px solid #d6d6d6'
                }}
              >
                {i}
              </div>
            ))}
          <div className="action-btn-inbox-tab">
            <Link to={`${props.match.url}/new-patient-form`}>
              <Icon type="plus-circle-o" />
            </Link>
          </div>
        </div>
      )}
    />
    <Route
      path={`${props.match.url}/new-patient-form`}
      component={NewPatientForm}
    />
    <Route
      path={`${props.match.url}/patient-details`}
      component={PatientName}
    />
    <Route
      path={`${props.match.url}/edit-patient-form`}
      component={EditPatientForm}
    />
  </div>
);

export default Patients;
