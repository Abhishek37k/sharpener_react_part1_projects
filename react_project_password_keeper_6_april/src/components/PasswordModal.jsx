import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PasswordContext } from "../context/PasswordContext";
import "./passwordmodal.css";

const PasswordModal = ({ onClose }) => {
    const {
        addPassword,
        updatePassword,
        editingPassword,
        setEditingPassword,
    } = useContext(PasswordContext);

    const isEdit = editingPassword && editingPassword.id;

    const [formData, setFormData] = useState({
        website: "",
        username: "",
        password: "",
    });

    useEffect(() => {
        if (editingPassword) {
            setFormData(editingPassword);
        }
    }, [editingPassword]);

    useEffect(() => {
        const firstInput = document.querySelector(".modal-content input");
        if (firstInput) firstInput.focus();
    }, []);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            ...formData,
            id: isEdit ? editingPassword.id : Date.now(),
        };

        isEdit ? updatePassword(newData) : addPassword(newData);
        onClose();
        setEditingPassword(null);
    };
//portal is created to render the modal outside the main app structure
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{isEdit ? "Edit Password" : "Add New Password"}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="modal-buttons">
                        <button type="submit">{isEdit ? "Update" : "Add"}</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default PasswordModal;
