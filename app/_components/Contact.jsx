/** @format */
import Link from "next/link";
import SocialLinks from "./SocialLinks";

function Contact() {
  return (
    <section className='pt-[60px] desktop:pt-[84px] bg-dark-gray' id='contact'>
      <div className='container'>
        <div className='flex flex-col items-center tablet:w-[445px] tablet:mx-auto desktop:flex-row desktop:w-full desktop:items-start desktop:justify-between'>
          <div className='text-center desktop:text-left desktop:w-[445px]'>
            <h2 className='section-heading'>Contact</h2>
            <p className='text-[1rem] leading-[1.625] desktop:mt-[36px] mt-5 text-light-gray'>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form action='' className='w-full desktop:w-[445px]'>
            <div className='mt-8 desktop:mt-0'>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='form-input'
              />
            </div>
            <div className='mt-8'>
              <label htmlFor='email' className='sr-only'>
                Name
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='form-input'
              />
            </div>
            <div className='mt-8'>
              <label htmlFor='message' className='sr-only'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                placeholder='Message'
                className='form-input h-[107px]'
              ></textarea>
            </div>
            <div className='flex justify-end mt-8'>
              <button type='submit' className='btn'>
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className='border-t border-white mt-[87px] tablet:mt-[92px] flex flex-col items-center pt-[39px] pb-[60px] gap-5 tablet:flex-row tablet:justify-between tablet:pt-[30px] tablet:pb-[40px] desktop:pt-[47px] desktop:pb-[92px]'>
          <Link href='' className='logo'>
            adamkeyes
          </Link>
          <SocialLinks />
        </div>
      </div>
      {/* end container */}
    </section>
  );
}

export default Contact;
