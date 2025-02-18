import Homecarousel from "@/app/Components/Home/page"
import { PageNav } from "../Pagenav/page"
import SideNav from "../HomeSideNav/page"

const HomePageNav = ({username}) => {
    return (
        <div className="flex">
            <div className="w-3/12 pr-5">
                <SideNav />
            </div>
            <div className="w-3/4 px-8">
                <div>
                    <PageNav name={username}/>
                </div>
                <div>
                    <Homecarousel />
                </div>
            </div>
        </div>
    )
}
export default HomePageNav