import HabitCard from './HabitCard';
import SelectDate from './SelectDate';
import SideNavbar from './SideNavbar';
import { FormEvent, useState } from 'react';
import Card from '../ui/Card';
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import SelectCategoryForm from '../MultiForm/SelectCategoryForm';
import HabitForm from '../MultiForm/HabitForm';
import HabitOptionsForm from '../MultiForm/HabitOptionsForm';
import HabitTimeForm from '../MultiForm/HabitTimeForm';
import { Button } from '../ui/button';

type FormData = {
	category: string;
	habit: string;
	description: string;
	everyday: string;
	start_date: string;
	ends_date: string;
};

const INITIAL_DATA: FormData = {
	category: '',
	habit: '',
	description: '',
	everyday: '',
	start_date: '',
	ends_date: '',
};

const CreateHabit = () => {
	const [data, setData] = useState(INITIAL_DATA);
	const [habit, setHabit] = useState<FormData[]>([]);

	function updateFields(fields: Partial<FormData>) {
		setData(prev => {
			return { ...prev, ...fields };
		});
	}

	const { next, back, step, isFirstStep, isLastStep, currentStepIndex, steps } =
		useMultiStepForm([
			<SelectCategoryForm
				key={data.start_date}
				{...data}
				updateFields={updateFields}
			/>,
			<HabitForm key={data.start_date} {...data} updateFields={updateFields} />,
			<HabitOptionsForm
				key={data.start_date}
				{...data}
				updateFields={updateFields}
			/>,
			<HabitTimeForm
				key={data.start_date}
				{...data}
				updateFields={updateFields}
			/>,
		]);

	function onSubmitHandler(e: FormEvent) {
		e.preventDefault();

		if (!isLastStep) return next();
		setHabit(prevHabit => [
			...prevHabit,
			{ ...data, create_at: new Date().toLocaleDateString() },
		]);
		alert('Successfully updated');
		console.log(habit);
	}

	return (
		<div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
			{/* <!-- Navigation --> */}
			<SideNavbar />
			{/* <!-- Content --> */}
			<div className="flex-2 px-2 mx-20">
				<AlertDialog>
					<AlertDialogTrigger>
						<div className="grid grid-cols-2 grid-rows-1 gap-4 my-5">
							<Card>
								<HabitCard title="Quit a bad habit" url=".././wrong.svg" />
							</Card>
							<Card>
								<HabitCard
									title="Coding is difficult..."
									url=".././wrong.svg"
								/>
							</Card>
							<Card>
								<HabitCard
									title="Coding is difficult..."
									url=".././palatte.svg"
								/>
							</Card>
							<Card>
								<HabitCard
									title="Coding is difficult..."
									url=".././heart.svg"
								/>
							</Card>
							<Card>
								<HabitCard
									title="Coding is difficult..."
									url=".././cinema.svg"
								/>
							</Card>
							<Card>
								<HabitCard
									title="Coding is difficult..."
									url=".././dollar.svg"
								/>
							</Card>
							<Card>
								<HabitCard title="Create category..." url=".././stack.svg" />
							</Card>
						</div>
					</AlertDialogTrigger>

					<AlertDialogContent className="mx-auto text-center">
						<form onSubmit={onSubmitHandler}>
							{step}
							<div className="flex justify-between mt-10">
								{!isFirstStep && (
									<Button type="button" variant="outline" onClick={back}>
										Back
									</Button>
								)}
								<Button type="submit">{isLastStep ? 'Save' : 'Next'}</Button>
							</div>
						</form>

						<div className="circles">
							{steps.map((_, index) => (
								<div
									key={index}
									className={`p-1.5 mx-1.5 border inline-block rounded-full  ${index <= currentStepIndex ? 'bg-[#FCD346]' : 'bg-[#ffffff]'}`}
								></div>
							))}
						</div>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
			<div className="flex-1 px-2">
				<SelectDate />
			</div>
		</div>
	);
};

export default CreateHabit;
