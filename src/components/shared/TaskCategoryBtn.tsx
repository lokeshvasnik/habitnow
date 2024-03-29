type TaskCategoryBtnProps = {
    title: string;
    url?: string;
    description?: string;
    className?: string;
};
const TaskCategoryBtn = ({
    title,
    url,
    description,
    className,
}: TaskCategoryBtnProps) => {
    return (
        <div className={`addBtnCard ${className}`}>
            <div>
                {url && <img className="w-8 mr-4" src={url} alt="trophy" />}
            </div>
            <div>
                <p className="text-[22px]">{title}</p>

                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default TaskCategoryBtn;
