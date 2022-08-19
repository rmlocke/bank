import React from "react";

const InputField = ({label, name, type, error}) => (
    <div className="row mb-3">
    <label htmlFor={name} className="col-md-4 col-form-label text-md-end">{label}</label>

    <div className="col-md-6">
        <input id={name} type={type} className="form-control" name={name} required></input>

            {error &&
            <span className="invalid-feedback" role="alert">
                <strong>{error}</strong>
            </span>
            }
    </div>
</div>
);

export default InputField;