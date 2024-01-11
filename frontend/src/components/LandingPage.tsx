import TopNavigation from "./shared-component/TopNavigation";
import DownloadButton from "./shared-component/buttons/DownloadButton";
import InquireButton from "./shared-component/buttons/InquireButton";
export default function LandingPage() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div>
                <TopNavigation />
            </div>
            <div className="flex flex-1 items-center justify-start w-screen hero-section">
                <div className="flex flex-col border h-4/3 w-full py-10 mx-10 px-5">
                    <div className="flex flex-col px-2">
                        <p className="text-7xl font-semibold text-slate-100 flex-1 flex items-end"> <span className="font-black">Pet Hub</span> - A place where every </p>
                        <p className="text-7xl font-semibold text-slate-100 flex-1">pet has a story</p>
                    </div>
                    <div className="mt-5 px-2 text-2xl font-normal flex items-start text-slate-200">
                        <p>
                            "Experience Top-Notch Veterinary Care and Discover Our Wide Range of Quality Pet Supplies"
                        </p>
                    </div>
                    <div className="flex items-center px-2 mt-10 gap-6">
                        <div>
                            <DownloadButton />
                        </div>
                        <div>
                            <InquireButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}