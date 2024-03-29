import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type HabitOptionsData = {
	everyday: string;
};
type HabitOptionsFormProps = HabitOptionsData & {
	updateFields: (fields: Partial<HabitOptionsData>) => void;
};

const HabitOptionsForm = ({
	everyday,
	updateFields,
}: HabitOptionsFormProps) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<h2 className="mb-10">Define your progress</h2>
			<div>
				<Select
					// onValueChange={(e) =>
					//     updateFields({ category: e.target.value })
					// }
					onValueChange={e => {
						updateFields({ everyday: e });
					}}
				>
					<SelectTrigger className="w-[280px]">
						<SelectValue placeholder="Select a prefer" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="default">Default</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default HabitOptionsForm;
