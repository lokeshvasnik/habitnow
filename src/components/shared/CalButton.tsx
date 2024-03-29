import useDaysOfWeek from '@/utils/date';
import { Button } from '../ui/button';

const CalButton = () => {
	const daysOfWeek = useDaysOfWeek();
	const currentDay = new Date().getDate();

	function selectDateHandler(day: string) {
		console.log(day);
	}

	return (
		<div className="flex space-x-5">
			{daysOfWeek.map(singleDate => (
				<Button
					onClick={() => selectDateHandler(singleDate.day)}
					key={singleDate.date}
					className={`smCalBtn bg-[#fff] flex flex-col px-5 py-9 rounded-lg ${singleDate.date === currentDay ? 'bg-[#F97316] -translate-y-4' : ''}`}
				>
					<p className="">{singleDate.day}</p>
					<p className="text-3xl font-bold">{singleDate.date}</p>
				</Button>
			))}
		</div>
	);
};

export default CalButton;
