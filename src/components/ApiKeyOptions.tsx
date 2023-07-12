'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import { createApiKey } from '@/helpers/create-api-key';
import { revokeApiKey } from '@/helpers/revoke-api-key';
import { Role } from '@prisma/client';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Button } from './ui/Button';
import { toast } from './ui/toast';

interface ApiKeyOptionsProps {
	// passing of entire object not allowed due to date property not being serializable
	apiKeyKey: string;
	role: Role;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyKey, role }) => {
	const router = useRouter();
	const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
	const [isRevoking, setIsRevoking] = useState<boolean>(false);

	const createNewApiKey = async () => {
		setIsCreatingNew(true);
		try {
			await revokeApiKey();
			await createApiKey();
			router.refresh();
		} catch (error) {
			toast({
				title: 'Error creating new API key',
				message: 'Please try again later.',
				type: 'error'
			});
		} finally {
			setIsCreatingNew(false);
		}
	};

	const revokeCurrentApiKey = async () => {
		setIsRevoking(true);
		try {
			await revokeApiKey();
			router.refresh();
		} catch (error) {
			toast({
				title: 'Error revoking your API key',
				message: 'Please try again later.',
				type: 'error'
			});
		} finally {
			setIsRevoking(false);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
				<Button variant='ghost' className='flex gap-2 items-center'>
					<p>
						{isCreatingNew
							? 'Creating new key'
							: isRevoking
							? 'Revoking key'
							: 'Options'}
					</p>
					{isCreatingNew || isRevoking ? (
						<Loader2 className='animate-spin h-4 w-4' />
					) : null}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={() => {
						navigator.clipboard.writeText(apiKeyKey);

						toast({
							title: 'Copied',
							message: 'API key copied to clipboard',
							type: 'success'
						});
					}}>
					Copy
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				{/* TODO  make this admin only menu*/}

				{role === Role.ADMIN && (
					<DropdownMenuItem onClick={createNewApiKey}>
						Create new key
					</DropdownMenuItem>
				)}
				{role === Role.USER && (
					<DropdownMenuItem
						onClick={() => {
							toast({
								title: 'WARNING !!!',
								message: 'ADMIN ONLY FEATURE',
								type: 'error'
							});
						}}>
						Create new key
					</DropdownMenuItem>
				)}
				<DropdownMenuSeparator />
				{role === Role.ADMIN && (
					<DropdownMenuItem onClick={revokeCurrentApiKey}>
						Revoke key
					</DropdownMenuItem>
				)}
				{role === Role.USER && (
					<DropdownMenuItem
						onClick={() => {
							toast({
								title: 'WARNING !!!',
								message: 'ADMIN ONLY FEATURE',
								type: 'error'
							});
						}}>
						Revoke key
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ApiKeyOptions;
