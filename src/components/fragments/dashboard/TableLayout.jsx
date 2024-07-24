/* eslint-disable react/prop-types */
export default function TableLayout({ children }) {
    return (
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
                className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                {children}
            </div>
        </div>
    )
}