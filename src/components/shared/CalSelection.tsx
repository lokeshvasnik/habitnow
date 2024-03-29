import { Plus } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogTrigger,
	AlertDialogAction,
} from '@/components/ui/alert-dialog';
import TaskCard from './TaskCard';
import TaskCategoryBtn from './TaskCategoryBtn';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import CalButton from './CalButton';

const CalSelection = () => {
	return (
		<div>
			{/* Upper Calendar  */}
			<CalButton />

			<div className="grid grid-cols-2 grid-rows-1 gap-4 my-5">
				<Card>
					<TaskCard title="Coding is easy..." url="./tick.svg" />
				</Card>
				<Card>
					<TaskCard title="Coding is difficult..." url="./tick.svg" />
				</Card>
			</div>
			<AlertDialog>
				<AlertDialogTrigger>
					<div className="taskAddButton">
						<Plus />
					</div>
				</AlertDialogTrigger>
				<AlertDialogContent className="mx-auto">
					<Link to="/dashboard/createHabit">
						<AlertDialogAction className="text-left">
							<Card>
								<TaskCategoryBtn
									title="Habit"
									url="./trophy.svg"
									description=" Activity that repeats over time. It has detailed
                                    tracking and statistics."
								/>
							</Card>
						</AlertDialogAction>
					</Link>

					<AlertDialogAction className="text-left">
						<Card>
							<TaskCategoryBtn
								title="Recurring Task"
								url="./trophy.svg"
								description=" Activity that repeats over time. It has detailed
                                tracking and statistics."
							/>
						</Card>
					</AlertDialogAction>

					<AlertDialogAction className="text-left">
						<Card>
							<TaskCategoryBtn
								title="Task"
								url="./trophy.svg"
								description=" Activity that repeats over time. It has detailed
                                 tracking and statistics."
							/>
						</Card>
					</AlertDialogAction>

					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default CalSelection;

{
	/* <div className="addBtnCard">
                            <div>
                                <img
                                    className="w-8 mr-4"
                                    src="./swap.svg"
                                    alt="trophy"
                                />
                            </div>
                            <div>
                                <p className="text-[22px]">Recurring Task</p>
                                <p className="text-sm">
                                    Activity that repeats over time. It has
                                    detailed tracking and statistics.
                                </p>
                            </div>
                        </div>

                        <div className="addBtnCard">
                            <div>
                                <img
                                    className="w-8 mr-4"
                                    src="./tick2.svg"
                                    alt="trophy"
                                />
                            </div>
                            <div>
                                <p className="text-[22px]">Task</p>
                                <p className="text-sm">
                                    Activity that repeats over time. It has
                                    detailed tracking and statistics.
                                </p>
                            </div>
                        </div> */
}
