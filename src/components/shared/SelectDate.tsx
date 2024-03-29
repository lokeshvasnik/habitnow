import { Calendar } from "../ui/calendar";
import { useState } from "react";

const SelectDate = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="flex justify-center items-center">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
            />
        </div>
    );
};

export default SelectDate;
