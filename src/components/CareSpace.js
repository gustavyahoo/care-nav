import React from 'react';
import { FullSizeBackground } from './common';
import { Form, Field, Formik } from 'formik';
import { Select } from 'antd';
const Option = Select.Option;

class CareSpace extends React.Component {
  render() {
    return (
      <FullSizeBackground backgroundColor="#4b395a">
        <Formik
          initialValues={{
            name: '',
            type: 'physician',
            address: '',
            phFax: ''
          }}
          validate={values => {
            let errors = {};
            if (!values.name) {
              errors.name = 'Name is required';
            } else if (values.name.length > 100) {
              errors.name = 'Name must be less than 100 characters in length';
            }

            if (!values.type) {
              errors.type = 'Type is required';
            }

            if (!values.address) {
              errors.address = 'Address is required';
            } else if (values.address.length > 100) {
              errors.address =
                'Address must be less than 500 characters in length';
            }

            if (!values.phFax) {
              errors.phFax = 'Phone number is required';
            } else if (
              isNaN(values.phFax) ||
              String(values.phFax).length !== 10
            ) {
              errors.phFax = 'Invalid phone or fax number';
            }

            return errors;
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
          render={({
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            values
          }) => (
            <Form className="care-space-container">
              <h1 className="auth-heading">Create a Care_Space</h1>
              <Field
                type="text"
                name="name"
                className="auth-input"
                placeholder="NAME"
              />
              {errors.name &&
                touched.name && (
                  <div className="error-field">{errors.name}</div>
                )}
              <Select
                name="type"
                value={values.type}
                style={{
                  marginBottom: 20
                }}
                onChange={value => setFieldValue('type', value)}
              >
                <Option value="physician">Physician</Option>
                <Option value="surgery">Surgery</Option>
              </Select>
              {errors.type &&
                touched.type && (
                  <div className="error-field">{errors.type}</div>
                )}
              <Field
                type="text"
                name="address"
                className="auth-input"
                placeholder="ADDRESS"
              />
              {errors.address &&
                touched.address && (
                  <div className="error-field">{errors.address}</div>
                )}
              <Field
                type="text"
                name="phFax"
                className="auth-input"
                placeholder="PH/FAX NUMBERS"
              />
              {errors.phFax &&
                touched.phFax && (
                  <div className="error-field">{errors.phFax}</div>
                )}
              <button
                className="next-btn"
                type="submit"
                disabled={isSubmitting}
              >
                NEXT
              </button>
            </Form>
          )}
        />
      </FullSizeBackground>
    );
  }
}

export default CareSpace;
