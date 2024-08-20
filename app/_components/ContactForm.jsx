/** @format */

function ContactForm() {
  return (
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
  );
}

export default ContactForm;
