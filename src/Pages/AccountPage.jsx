import Breadcrumb from '../ui/Breadcrumb';
import Button from '../ui/Button';

function InputDesign({ label, type, placeholder, defaultValue }) {
  return (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='focus:outline-none focus:ring-1 focus:ring-gray-300 bg-gray-100 rounded-md p-3 w-full'
      />
    </div>
  );
}

const AccountPage = () => {
  return (
    <main>
      <div className='wrapper px-4 md:px-0  '>
        <div className='flex justify-between items-center gap-4'>
          <Breadcrumb customPath='my-account' />
          <h2 className='text-sm whitespace-nowrap'>
            Welcome! <span className='text-primary'>Md Rimel</span>
          </h2>
        </div>
      </div>

      <section className='wrapper px-4 mb-60 md:px-0'>
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Left Sidebar */}
          <aside className='w-full lg:w-1/4'>
            <div className='flex flex-col gap-6'>
              {/* Manage My Account Section */}
              <div>
                <h3 className='font-medium text-base mb-4'>
                  Manage My Account
                </h3>
                <ul className='flex flex-col gap-2 ml-8'>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-primary hover:text-primary'
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-gray-500 hover:text-primary'
                    >
                      Address Book
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-gray-500 hover:text-primary'
                    >
                      My Payment Options
                    </a>
                  </li>
                </ul>
              </div>

              {/* My Orders Section */}
              <div>
                <h3 className='font-medium text-base mb-4'>My Orders</h3>
                <ul className='flex flex-col gap-2 ml-8'>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-gray-500 hover:text-primary'
                    >
                      My Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-gray-500 hover:text-primary'
                    >
                      My Cancellations
                    </a>
                  </li>
                </ul>
              </div>

              {/* My Wishlist */}
              <div>
                <h3 className='font-medium text-base'>My Wishlist</h3>
              </div>
            </div>
          </aside>

          {/* Right Content - Edit Profile Form */}
          <section className='flex-1'>
            <div className='bg-white shadow-sm p-8 md:p-15 rounded-lg border border-gray-100'>
              <h2 className='text-primary font-medium text-xl mb-6'>
                Edit Your Profile
              </h2>

              <form className='flex flex-col gap-6'>
                {/* First Name and Last Name */}
                <div className='flex flex-col md:flex-row gap-6'>
                  <div className='flex-1'>
                    <InputDesign
                      label='First Name'
                      type='text'
                      placeholder='First Name'
                      defaultValue='Md'
                    />
                  </div>
                  <div className='flex-1'>
                    <InputDesign
                      label='Last Name'
                      type='text'
                      placeholder='Last Name'
                      defaultValue='Rimel'
                    />
                  </div>
                </div>

                {/* Email and Address */}
                <div className='flex flex-col md:flex-row gap-6'>
                  <div className='flex-1'>
                    <InputDesign
                      label='Email'
                      type='email'
                      placeholder='Email'
                      defaultValue='rimel1111@gmail.com'
                    />
                  </div>
                  <div className='flex-1'>
                    <InputDesign
                      label='Address'
                      type='text'
                      placeholder='Address'
                      defaultValue='Kingston, 5236, United State'
                    />
                  </div>
                </div>

                {/* Password Changes Section */}
                <div className='flex flex-col gap-4 mt-4'>
                  <h3 className='font-medium text-base'>Password Changes</h3>
                  <InputDesign
                    label=''
                    type='password'
                    placeholder='Current Passwod'
                  />
                  <InputDesign
                    label=''
                    type='password'
                    placeholder='New Passwod'
                  />
                  <InputDesign
                    label=''
                    type='password'
                    placeholder='Confirm New Passwod'
                  />
                </div>

                {/* Action Buttons */}
                <div className='flex justify-end gap-4 mt-4'>
                  <button
                    type='button'
                    className='px-8 py-3 text-black hover:underline'
                  >
                    Cancel
                  </button>
                  <Button text='Save Changes' type='submit' />
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AccountPage;
