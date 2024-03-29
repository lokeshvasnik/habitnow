import { DoorClosed, Blocks, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
	return (
		<div className="bg-[#FCD346] px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
			<nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
				<Link
					className="bg-[#F97316] text-white p-4 inline-flex justify-center rounded-md"
					to="/dashboard"
				>
					<DoorClosed className="text-black" />
				</Link>
				{/* <!-- Active: bg-gray-800 text-white, Not active: text-white/50 --> */}
				<Link
					className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-[#F97316] hover:text-white smooth-hover"
					to="#"
				>
					<Blocks className="text-black" />
				</Link>
				<Link
					className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-[#F97316] hover:text-white smooth-hover"
					to="#"
				>
					<CalendarDays className="text-black" />
				</Link>
			</nav>
		</div>
	);
};

export default SideNavbar;
