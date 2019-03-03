import React from 'react';
import { Formik, Field } from 'formik';
import validateText from '../../helpers/validate/FormValidation';


const FormTry = () => (
    <div className='top'>
        <Formik
            initialValues={{
                title: '',
                description: '',
                tags: ''
            }}
            onSubmit={values => {
                console.log(values + 'Confirmed');
            }}
        >
            {({ errors, touched}) => (
                <form className='test-form'>
                    <Field name="title" validate={validateText} />
                    {errors.title && touched.title && <div>{errors.title}</div>}

                    <Field name="description" validate={validateText} />
                    {errors.description && touched.description &&
                    <div>{errors.description}</div>}

                    <Field name="tags" validate={validateText} />
                    {errors.tags && touched.tags && <div>{errors.tags}</div>}

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    </div>
);

export default FormTry;