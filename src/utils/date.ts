import { useEffect, useState } from "react";

interface DayOfWeek {
    day: string;
    date: number;
}

const useDaysOfWeek = (): DayOfWeek[] => {
    const [daysOfWeek, setDaysOfWeek] = useState<DayOfWeek[]>([]);

    useEffect(() => {
        const today = new Date();
        const dayIndex = today.getDay();

        const monday = new Date(today);
        monday.setDate(today.getDate() - dayIndex + (dayIndex === 0 ? -6 : 1));

        const days: DayOfWeek[] = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(monday);
            day.setDate(monday.getDate() + i);
            const abbreviatedDayName = day.toLocaleString("en-US", {
                weekday: "short",
            });
            const date = day.getDate();
            days.push({ day: abbreviatedDayName, date: date });
        }
        setDaysOfWeek(days);
    }, []);

    return daysOfWeek;
};

export default useDaysOfWeek;
