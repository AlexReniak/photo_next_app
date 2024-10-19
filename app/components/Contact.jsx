const Contact = () => {
  return (
    <section className='container flex flex-col items-center justify-center'>
      <h2 className='text-4xl mb-8'>Contact Us</h2>
      <div>
        <form className='flex flex-col items-center justify-center'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            className='py-2 my-4'
            required
          />
          <label htmlFor='name' />
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='py-2 my-4'
            required
          />
          <label htmlFor='email' />
          <textarea
            placeholder='Message'
            name='message'
            className='py-2 my-4'
            required
          ></textarea>
          <label htmlFor='message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
