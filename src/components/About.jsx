import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
	return (
		<div className=' bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<div className='w-full relative'>
				<Image
					className='rounded-t-lg'
					src='/about.jpg'
					alt='About'
					fill
					sizes='100vw'
				/>
			</div>
			<div className='p-5'>
				<Link href='#'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						About NutriSense
					</h5>
				</Link>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{`
          NutriSense was inspired by a personal need for quick and healthy meal ideas. As busy professionals with busy schedules, we found it difficult to consistently make nutritious meals for ourselves and our families. We wanted a solution that was convenient, accessible, and tailored to our specific dietary needs and preferences. We also wanted to be able to use ingredients that we already had in our kitchen, without having to go to the grocery store. `}
				</p>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{`
		  We decided to build a chatbot that would help us find recipes that fit our needs and preferences, and that would also suggest recipes based on the ingredients we already had in our kitchen. We named our chatbot NutriSense, because it helps us make sense of our nutrition and make healthier choices.`}
				</p>

				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{`	NutriSense is a smart recipe suggester that uses the ChatGPT API to generate recipes based on the user's dietary needs and preferences. The user can also provide a list of ingredients that they have in their kitchen, and NutriSense will suggest recipes that can be made with those ingredients. The user can also ask NutriSense for recipes that fit a specific diet, such as vegan, vegetarian, keto, or paleo.`}
				</p>

				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{`NutriSense will then generate a recipe that fits the user's needs and preferences. NutriSense can also suggest recipes based on the user's mood, such as happy, sad, or tired. NutriSense will then generate a recipe that fits the user's mood. NutriSense can also suggest recipes based on the user's location, such as home, work, or school. NutriSense will then generate a recipe that fits the user's location. NutriSense can also suggest recipes based on the user's mood, such as happy, sad, or tired. NutriSense will then generate a recipe that fits the user's mood.`}
				</p>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{`This project was developed as a Portfolio Project for ALX SE Program, as part of our training to become full-stack software engineers. We are proud to have developed a solution that addresses a common problem for many people, and We hope that this chatbot will help others eat healthier and save time in the kitchen.`}
				</p>
				<Link
					href='https://github.com/umohpyro/NutriSense'
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Check out the project on Github
					<svg
						aria-hidden='true'
						className='w-4 h-4 ml-2 -mr-1'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clipRule='evenodd'></path>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default About;
