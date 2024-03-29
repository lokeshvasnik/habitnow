import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type CategoryFormData = {
	category: string;
};

type SelectCategoryFormProps = CategoryFormData & {
	updateFields: (fields: Partial<CategoryFormData>) => void;
};

const SelectCategoryForm = ({
	category,
	updateFields,
}: SelectCategoryFormProps) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<div className="mx-auto text-1xl mb-10">
				How do you want to evaluate your progress?
			</div>

			<div>
				<Select
					// onValueChange={(e) =>
					//     updateFields({ category: e.target.value })
					// }
					onValueChange={e => {
						updateFields({ category: e });
					}}
				>
					<SelectTrigger className="w-[280px]">
						<SelectValue placeholder="With What?" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="cat-1">WITH A YES OR NO</SelectItem>
							<SelectItem value="cat-2">WITH A NUMERIC VALUE</SelectItem>
							<SelectItem value="cat-3"> WITH A TIMER</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default SelectCategoryForm;

{
	/* <div className="flex flex-col space-y-1.5">
                    <Button
                        type="button"
                        value={category1}
                        onClick={() => updateFields({ category1: "category1" })}
                    >
                        WITH A YES OR NO
                    </Button>
                    <Button
                        type="button"
                        value={category2}
                        onClick={() => updateFields({ category2: "category2" })}
                    >
                        WITH A NUMERIC VALUE
                    </Button>
                    <Button
                        type="button"
                        value={category3}
                        onClick={() => updateFields({ category3: "category3" })}
                    >
                        WITH A TIMER
                    </Button>
                </div> */
}
