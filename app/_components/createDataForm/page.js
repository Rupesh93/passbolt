"use client";

import { useState } from "react";

const CreateDataForm = ({ encryptMessage }) => {
    const defaultFormObj = {
        name: "",
        username: "",
        password: "",
        notes: "",
    };
    const [form, setForm] = useState(defaultFormObj);
    const [error, setError] = useState("")

    const handleCreateVault = (e) => {
        e.preventDefault();
        if (!form.name || !form.username || !form.password) { setError('Please fill the requied fields!'); return }
        encryptMessage(form);
        setForm(defaultFormObj);
        setError("");
    };

    return (
        <>
            <div className="flex items-center justify-center p-4 ">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 ">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Create Vault
                    </h2>

                    <form className="space-y-4">
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            type="text"
                            placeholder="Name*"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            type="text"
                            required
                            placeholder="Username*"
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                        />
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            type="password"
                            placeholder="Password*"
                            required
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="Notes"
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        />
                        {
                            error && <small className="text-red-500">{error}</small>
                        }
                        <button
                            type="submit"
                            onClick={handleCreateVault}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateDataForm;
