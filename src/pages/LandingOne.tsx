import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingOne = () => {
    return (
        <div className="text-center py-36">
            <img className="mx-auto mb-16" src="./wheelLogo.svg" alt="wheel" />
            <h1 className="text-[42px] font-bold mb-5">Welcome to HabitNow</h1>
            <h6 className="text-2xl">
                This web app will help you to keep an organized routine as you
                build new habits.⭐
            </h6>
            <Link to="/dashboard">
                <Button className="mt-10">Take Me There</Button>
            </Link>
        </div>
    );
};

export default LandingOne;
