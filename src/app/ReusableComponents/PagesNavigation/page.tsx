
import { PageNav } from "../Pagenav/page"
import PageSideNav from "@/app/Components/PageSIdeNav/page"

const PageNavbar = () => {
    return (
            <div className="w-full   h-full flex justify-center items-center bg-white rounded-lg shadow-md p-4 border">
                <div className="w-1/4 h-full hidecontent">
                    <PageSideNav />
                </div>
                <div className="w-3/4 widthfull h-full">
                        <PageNav />
                </div>
            </div>
    )
}
export default PageNavbar