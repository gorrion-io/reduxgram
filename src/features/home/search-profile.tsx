import React, { StatelessComponent } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, InjectedFormProps, ConfigProps, FormErrors, WrappedFieldProps } from "redux-form";

import { redirectToProfilePage } from "@src/redux/actions";
import { fetchPhotos } from "@src/features/photos/action-creators";
import { RootState } from "@src/redux/state";

interface InputFieldProps {
    type: string;
    // label: string;
    placeholder: string;
}
const InputField: StatelessComponent<WrappedFieldProps & InputFieldProps> = ({
    type,
    // label,
    placeholder,
    input,
    meta: {
        touched,
        error,
        warning,
    },
}) => (
    <div>
        {/* <label>{label}</label> */}
        <div>
            <input
                {...input}
                className="form-control"
                placeholder={placeholder}
                type={type}
            />
            {touched &&
                ((error &&
                    <span>{error}</span>)
                || (warning && <span>{warning}</span>))}
        </div>
    </div>
);
const MyField = Field as new () => Field<InputFieldProps>;

export interface FormData {
    profileName: string;
}
const SearchProfile: StatelessComponent<InjectedFormProps<FormData>> = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="input-group">
        <MyField
            name="profileName"
            component={InputField}
            type="text"
            placeholder="Enter Instagram profile name"
        />
        <span className="input-group-btn">
            <button
                className="btn btn-primary"
                type="submit"
            >
                Search
            </button>
        </span>
    </form>
);

function mapStateToProps(state: RootState): Partial<ConfigProps<FormData>> {
    return {
        initialValues: {
            profileName: state.photos.profileName || "",
        },
    };
}
export const SearchProfileContainer =
connect(mapStateToProps)
(reduxForm<FormData>({
    form: "searchProfile",
    validate: values => {
        const errors: FormErrors<FormData> = {};
        if (values.profileName.length <= 3) {
            errors.profileName = "To short profile name";
        }
        return errors;
    },
    onSubmit: async (values, dispatch) => {
        const profileName = values.profileName!;
        await dispatch(fetchPhotos(profileName));
        dispatch(redirectToProfilePage(profileName));
    },
})
(SearchProfile));
