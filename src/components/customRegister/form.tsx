'use client';

import Alert from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const data: any = await res.json();

			if (res.ok) {
				signIn();
			} else {
				// setError((await res.json()).error)

				setError(data.error);
			}
		} catch (error: any) {
			setError(error?.message);
		}
	};

	return (
		<form onSubmit={onSubmit} className='space-y-2 w-full sm:w-[400px]'>
			<div className='grid w-full items-center gap-1.5'>
				<Label htmlFor='email' className='dark:text-slate-200'>
					Email
				</Label>
				<Input
					className='w-full'
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					type='email'
				/>
			</div>
			<div className='grid w-full items-center gap-1.5'>
				<Label htmlFor='password' className='dark:text-slate-200'>
					Password
				</Label>
				<Input
					className='w-full'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					id='password'
					type='password'
				/>
			</div>
			{error && <Alert>{error}</Alert>}
			<div className='w-full'>
				<Button className='w-full' size='lg' disabled>
					Register
				</Button>
			</div>
			<p className='text-center text-sm dark:text-slate-200'>
				Need to login with your email and password?{' '}
				<Link className='text-indigo-500 hover:underline' href='/login'>
					Sign In
				</Link>{' '}
				or Login below{' '}
			</p>
		</form>
	);
};
