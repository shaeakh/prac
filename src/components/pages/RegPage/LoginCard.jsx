
'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export default function LoginCard() {
    return (
        <Card className="max-w-sm bg-white bg-opacity-10 p-4 rounded-lg shadow-md" style={{ width: '420px' }}>
            <h1 className='mb-2 block text-center text-5xl text-white font-bold'>Register</h1>
            <form className="flex flex-col gap-4 font-bold">

                <div className="mb-2 block gap-2 flex flex-row">          
                    <TextInput id="firstName" type="text" placeholder="First Name" required style={{  borderRadius: '40px', padding: '10px 10px 10px 20px' }} />
                    <TextInput id="lastName" type="text" placeholder="Last Name" required style={{  borderRadius: '40px', padding: '10px 10px 10px 20px' }} />
                </div>
                <div className="mb-2 block">          
                    <TextInput id="email" type="email" placeholder="Your Email" required style={{borderRadius: '40px', padding: '10px 10px 10px 20px' }} />
                </div>
                <div className="mb-2 block ">          
                    <TextInput inputMode='bg-white' id="password" type="password" placeholder="Password" required style={{  borderRadius: '40px', padding: '10px 10px 10px 20px' }} />
                </div>
                
                <Button className='font-bold' type="submit ">Register</Button>
            </form>
        </Card>
    );
}
