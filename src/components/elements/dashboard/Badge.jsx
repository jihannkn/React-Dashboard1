/* eslint-disable react/prop-types */
const Badge = ({ children }) => {
    return (
        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                {children}
            </div>
        </div>
    )
}

const Icon = ({ icon, className }) => {
    return (
        <div className={`p-3 ${className} bg-opacity-75 rounded-full`}>
            <i className="w-8 h-8 text-white text-3xl">
                {icon}
            </i>
        </div>
    )
}

const Description = ({ value, title }) => {
    return (
        <div className="mx-5">
            <h4 className="text-2xl font-semibold text-gray-700">{value}</h4>
            <div className="text-gray-500">{title}</div>
        </div>
    )
}

Badge.Icon = Icon
Badge.Description = Description

export default Badge