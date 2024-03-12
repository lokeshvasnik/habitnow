import { Button } from "../ui/button";
import TaskCard from "./TaskCard";

const CalSelection = () => {
    return (
        <div>
            <div className="flex space-x-5">
                <Button className="smCalBtn border flex flex-col px-5 py-9 rounded-lg">
                    <p className="">Sun</p>
                    <p className="text-3xl font-bold">10</p>
                </Button>
                <Button className="smCalBtn border flex flex-col px-5 py-9 rounded-lg">
                    <p className="">Mon</p>
                    <p className="text-3xl font-bold">11</p>
                </Button>
                <Button className="smCaltn border flex flex-col px-5 py-9 rounded-lg bg-[#F97316CC]">
                    <p className="">Tue</p>
                    <p className="text-3xl font-bold">12</p>
                </Button>
                <Button className="smCalBtn border flex flex-col px-5 py-9 rounded-lg">
                    <p className="">Wed</p>
                    <p className="text-3xl font-bold">13</p>
                </Button>
                <Button className="smCalBtn border flex flex-col px-5 py-9 rounded-lg">
                    <p className="">Thu</p>
                    <p className="text-3xl font-bold">14</p>
                </Button>
                <Button className="smCalBtn border flex flex-col px-5 py-9 rounded-lg">
                    <p className="">Fri</p>
                    <p className="text-3xl font-bold">15</p>
                </Button>
                <Button className="smCalBtn border flex flex-col px-5 py-9 rounded-lg">
                    <p className="">Sat</p>
                    <p className="text-3xl font-bold">16</p>
                </Button>
            </div>
            <div className="flex space-x-2">
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
};

export default CalSelection;
