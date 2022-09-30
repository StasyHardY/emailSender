import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Mailer = () => {
   const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_l9hig28', 'template_whylagk', e.target, 'hHjklKeZ6mVVe3QuF')
.then((result) => {
console.log(result.text);
}, (error) => {
console.log(error.text);
});
e.target.reset()
};
   return ( 
      <div class="bg-blue-400 h-screen overflow-hidden flex flex-col items-center justify-center">
         <form ref={form} onSubmit={sendEmail} className="flex flex-col py-2 px-2 mt-2 w-96 shadow-lg rounded-sm text-center bg-slate-50" 
            >
         <h1 className="text-4xl text-center font-thin">
            Contact form
         </h1>
         <p className="text-xl text-center font-thin">
            Отправьте мне сообщение!
         </p>
         

            <div class="flex flex-col mt-4">
               <input  class="flex-grow h-8 px-2 border rounded border-grey-400 hover:bg-slate-50 focus:bg-slate-100"  placeholder="Name"  type="text" name="user_name"  />
            </div>

            <div class="flex flex-col mt-4">
               <input class="flex-grow h-8 px-2 rounded border border-grey-400 hover:bg-slate-50 focus:bg-slate-100"  placeholder="Email" type="email" readOnly value="klevoginm@mail.ru" name="user_email" />
            </div>

            <textarea placeholder="Enter your message" className="flex-grow mt-2 h-48 px-2 border rounded border-grey-400 hover:bg-slate-50 focus:bg-slate-100" type="submit" name="message" rows='4'></textarea>
               <button type="submit" value="Send" class="bg-blue-500 hover:bg-blue-600  text-white text-sm font-semibold mt-2 py-2 px-4 rounded">
                  Send
               </button>
               
         </form>
      </div>
    );
}
 
export default Mailer;