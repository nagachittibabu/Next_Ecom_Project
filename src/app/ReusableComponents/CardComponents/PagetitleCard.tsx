const PageTitleCard = (
    {
        Title,
        SubTitle
    }
) => {
    return (
        <div className=" bg-indigo-50 border-2ws text-center w-full h-72  pt-24">
            <h1 className="text-4xl font-semibold">{Title}</h1>
            <p className="pt-6"><span className="text-red-300">Home</span> - {SubTitle}</p>
        </div>
    )
}
export default PageTitleCard