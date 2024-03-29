import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Switch } from '../ui/switch';

type HabitTimeData = {
	start_date: string;
	ends_date: string;
};
type HabitTimeProps = HabitTimeData & {
	updateFields: (fields: Partial<HabitTimeData>) => void;
};

const HabitTimeForm = ({
	start_date,
	ends_date,
	updateFields,
}: HabitTimeProps) => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [endDate, setEndDate] = useState<Date | undefined>(new Date());

	useEffect(() => {
		const newStartDate = date?.toDateString();
		const endingDate = endDate?.toDateString();

		updateFields({ start_date: newStartDate });
		updateFields({ ends_date: endingDate });
	}, [date, endDate]);

	return (
		<div>
			<div className="mx-auto mb-10 text-1xl">Select your preferred time</div>
			<div className="flex justify-between items-center mt-5">
				<h2>Start Date</h2>

				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'outline'}
							className={cn(
								'w-[280px] justify-start text-left font-normal',
								!date && 'text-muted-foreground'
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? format(date, 'PPP') : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>
			<div className="flex justify-between items-center mt-5">
				<h2>End Date</h2>

				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'outline'}
							className={cn(
								' justify-start text-left font-normal',
								!endDate && 'text-muted-foreground'
							)}
						>
							{endDate ? (
								format(endDate, 'PPP')
							) : (
								// <span>Pick a date</span>
								<Switch />
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={endDate}
							onSelect={setEndDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
};

export default HabitTimeForm;
