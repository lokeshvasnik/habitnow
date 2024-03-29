type HabitCardProps = {
    title: string;
    url: string;
};

const HabitCard = ({ title, url }: HabitCardProps) => {
    return (
        <div className="taskCard">
            <p>{title}</p>
            <img
                className="p-3 bg-[#D9D9D980] rounded-xl"
                src={url}
                alt="error"
            />
        </div>
    );
};

export default HabitCard;
