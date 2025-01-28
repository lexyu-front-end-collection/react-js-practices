import { UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

function User() {
	return (
		<>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="secondary" size="icon">
						<UserIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="overflow-y-scroll space-y-2 w-96">
					<div className="flex items-center gap-2">
						<p>{"fullName"}</p>
						<p className="text-sm">{"userName"}</p>
					</div>
					<Label htmlFor="address">Your Address:</Label>
					<Input
						id="address"
						value={"address"}
					/>
				</PopoverContent>
			</Popover>
		</>
	)
}


export default User