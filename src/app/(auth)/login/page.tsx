//import LoginPage from '@/components/customLogin/Login'
import { Form } from '@/components/customLogin/form'
import Icons from '@/components/Icons'
import { buttonVariants } from '@/components/ui/Button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'
import { FC } from 'react'

const page: FC = () => {
  return (
    <>
      <div className='absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Link
              className={buttonVariants({
                variant: 'ghost',
                className: 'w-fit',
              })}
              href='/'>
              <Icons.ChevronLeft className='mr-2 h-4 w-4' />
              Back to home
            </Link>

            <LargeHeading>Welcome back!</LargeHeading>
            {/* <Paragraph>Please sign in using your Email & Password.</Paragraph> */}
            <Form />
            {/* <Paragraph>or</Paragraph> */}
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  )
}

export default page
