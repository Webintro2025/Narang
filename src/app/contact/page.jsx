
import GetInTouch from '../../components/GetInTouch';
import Maps from '../../components/Maps';

const ContactPage = () => {
  return (
    <main className="min-h-screen mt-20 sm:mt-28 bg-yellow-50">
      <div className="py-10 text-center bg-gradient-to-r from-[#3F6165] via-yellow-300 to-[#3F6165]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3F6165]" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Contact Us
        </h1>
      </div>
   
        <GetInTouch />
       
        <Maps />
 
    </main>
  );
};

export default ContactPage;
