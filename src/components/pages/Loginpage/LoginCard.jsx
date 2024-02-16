
'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function LoginCard() {
    return (
        <Card className="max-w-sm bg-white bg-opacity-10 p-4 rounded-lg shadow-md" style={{ width: '420px' }}>
                <h1 className=' mb-2 block text-center	text-5xl text-white	font-bold	'>Login</h1>
            <form className="flex flex-col gap-4">

                
                <div className="mb-2 block " >          
                <TextInput id="email1" type="email" placeholder="Your Email" required style={{ borderRadius: '40px' ,padding: '10px 10px 10px 20px',}} />
                </div>
                <div className="mb-2 block">          
                    <TextInput  className='textInput' id="password1" type="password" placeholder="Password" required style={{ borderRadius: '40px',padding: '10px 10px 10px 20px' }} />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label className='text-white' htmlFor="remember">Remember me</Label>
                </div>
                <Button  className='font-bold' type="submit ">Login</Button>
               
                <Link to="/Register" className="block mt-4 text-center text-white underline">New User? Sign Up</Link >                          
            </form>
            
        </Card>
    );
}
