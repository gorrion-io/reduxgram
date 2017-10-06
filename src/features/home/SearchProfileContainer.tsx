import React, { Component, StatelessComponent } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, InjectedFormProps, ConfigProps, FormErrors, WrappedFieldProps } from "redux-form";

import { redirectToProfilePage } from "@src/common/actions";
import { fetchPhotos } from "@src/features/photos/redux/action-creators";
import { RootState } from "@src/redux/root-state";

interface FormData {
    profileName: string;
}
interface InputFieldProps {
    type: string;
    // label: string;
    placeholder: string;
}
interface SearchProfileProps {
    isFetching: boolean;
}
class SearchProfile extends Component<SearchProfileProps & InjectedFormProps<FormData>> {

    render() {
        const { handleSubmit, isFetching } = this.props;
        const MyField = Field as new () => Field<InputFieldProps>;

        return (
            <form onSubmit={handleSubmit} className="input-group">
                <MyField
                    name="profileName"
                    component={this.renderInput}
                    type="text"
                    placeholder="Enter Instagram profile name"
                />
                <span className="input-group-btn">
                    <button
                        disabled={isFetching}
                        className="btn btn-primary"
                        type="submit"
                    >
                        Search
                    </button>
                </span>
            </form>
        );
    }

    private renderInput: StatelessComponent<WrappedFieldProps & InputFieldProps> = ({
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
                    (
                        (error &&
                            <span>{error}</span>
                        )
                    ||
                        (warning &&
                            <span>{warning}</span>
                        )
                    )
                }
            </div>
        </div>
    )
}

const SearchProfileForm = reduxForm<FormData, Partial<SearchProfileProps>>({
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
})(SearchProfile);

function mapStateToProps(state: RootState): Partial<SearchProfileProps> & Partial<ConfigProps<FormData>> {
    return {
        initialValues: {
            profileName: state.photos.profileName || "",
        },
        isFetching: state.photos.isFetching,
    };
}

export const SearchProfileContainer = connect(mapStateToProps)(SearchProfileForm);
