import SectionHeader from "../SectionHeader/SectionHeader"

const ContactUs = () => {
  return (
    <section className="text-center my-8" id="contact">
        <SectionHeader
            subHeader={'Don\'t hesitate'}
            mainHeader={'Contact us'} 
        />
        <div className="mt-8">
            <a className="text-4xl underline text-gray-500" href="tel:+254123123123">
                +254 123 123 123
            </a>
        </div>
    </section>
  )
}

export default ContactUs;