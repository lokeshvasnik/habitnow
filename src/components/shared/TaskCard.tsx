type TaskCardProps = {
    title: string;
    url: string;
};

const TaskCard = ({ title, url }: TaskCardProps) => {
    return (
        <div className="taskCard">
            <p>{title}</p>
            <img src={url} alt="error" />
        </div>
    );
};

export default TaskCard;
