import { Input } from '../ui/input';
import { Label } from '../ui/label';

type UserHabitFormData = {
	habit: string;
	description: string;
};
type HabitFormProps = UserHabitFormData & {
	updateFields: (fields: Partial<UserHabitFormData>) => void;
};

const HabitForm = ({ habit, description, updateFields }: HabitFormProps) => {
	return (
		<div>
			<div className="mx-auto mb-10 text-1xl">Define your habit?</div>

			<div className="grid w-full items-center gap-4">
				<div className="flex flex-col space-y-1.5">
					<Label className="mb-2" htmlFor="habits">
						Habit
					</Label>
					<Input
						id="habits"
						placeholder="Cooking food"
						onChange={e => updateFields({ habit: e.target.value })}
						value={habit}
					/>
				</div>

				<div className="flex flex-col space-y-1.5">
					<Label className="mb-2" htmlFor="description">
						Description
					</Label>
					<Input
						id="description"
						placeholder="optional"
						onChange={e => updateFields({ description: e.target.value })}
						value={description}
					/>
				</div>
			</div>
		</div>
	);
};

export default HabitForm;
