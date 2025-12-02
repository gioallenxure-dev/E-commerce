import { Phone, Mail } from 'lucide-react';
import Breadcrumb from '../ui/Breadcrumb';
import Button from '../ui/Button';

function InputDesign({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='focus:outline-none focus:ring-1 focus:ring-gray-300 bg-gray-100 rounded-md p-3 w-full'
    />
  );
}

const ContactPage = () => {
  return (
    <main>
      <Breadcrumb />

      <div className='wrapper px-4 mb-60 md:px-0 '>
        <div className='flex flex-col lg:flex-row gap-15'>
          {/* Left Side*/}
          {/* Takes up roughly 30-40% width on large screens */}
          <div className='w-full lg:w-[30%] flex flex-col gap-6'>
            {/* Placeholder content for the left panel info */}
            <div className='bg-white shadow-sm p-6 rounded-lg border border-gray-100 h-full'>
              <div className='flex flex-col gap-10'>
                <div>
                  <div className='flex items-center gap-3 mb-8'>
                    <div className='w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center text-white'>
                      {/* Phone Icon */}
                      <Phone size={20} />
                    </div>
                    <h3 className='font-medium text-lg'>Call To Us</h3>
                  </div>
                  <p className='  mb-4'>
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className=' '>Phone: +8801611112222</p>
                </div>
                <hr />
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center text-white'>
                      {/* Mail Icon */}
                      <Mail size={20} />
                    </div>
                    <h3 className='font-medium text-lg'>Write To US</h3>
                  </div>
                  <p className='  mb-4'>
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className='mb-4'>Emails: customer@exclusive.com</p>
                  <p className='mb-4'>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          {/* Takes up remaining space (60-65%) */}
          <div className='w-full lg:w-[75%] shadow-sm bg-white p-6 rounded-lg border border-gray-100'>
            <div className='flex flex-col gap-5 h-full justify-between'>
              {/* Top Row: Inputs */}
              <div className='flex flex-col md:flex-row gap-4'>
                <InputDesign type='text' placeholder='Your Name' />
                <InputDesign type='email' placeholder='Your Email' />
                <InputDesign type='text' placeholder='Your Phone' />
              </div>

              {/* Middle: Textarea */}
              <div className='flex-1'>
                <textarea
                  placeholder='Your Message'
                  className='focus:outline-none focus:ring-1 focus:ring-gray-300 bg-gray-100 rounded-md p-3 w-full resize-none h-[200px] lg:h-full'
                ></textarea>
              </div>

              {/* Bottom: Button */}
              <div className='flex justify-end'>
                <Button text='Send Message' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
