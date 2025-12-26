const ShowDataList = ({ data, deleteData }) => {
    return (
        <>
            <div className="relative flex flex-col w-full h-auto overflow-auto text-gray-700 bg-grey shadow-md rounded-xl bg-clip-border">
                <table className="w-full text-left table-auto min-w-max border">
                    <thead className="bg-red">
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Name
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    UserName
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Password
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Notes
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70" >Action</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 &&
                            data.map((vault) => (
                                <tr key={vault.id}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {vault.name}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {vault.username}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {vault.password}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {vault.notes}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <button
                                            type="submit"
                                            onClick={() => { deleteData(vault.id) }}
                                            className=" bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3 py-0.5 rounded-lg transition-colors"
                                        >
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShowDataList;
