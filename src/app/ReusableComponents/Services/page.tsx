// @ts-ignore
const ServiceCard = ({ service, icon }) => {
    return (
        <div className="lg:w-3/12 md:w-1/2 sm:w-1/4 h-24  z-0 p-4 half">
            <div className="w-full fontsize flex justify-center items-center border rounded-lg bg-white ">
            <div className="text-red-300 text-4xl p-3 z-0 padding0">
                <i className={icon}></i>
            </div>
            <div>
                <h1 className="text-center lg:text-xl  md:text-sm font-semibold z-0">{service}</h1>
            </div>
            </div>
        </div>

    )
}
export default ServiceCard