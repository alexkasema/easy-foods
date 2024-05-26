import SectionHeader from "../SectionHeader/SectionHeader";


const About = () => {
  return (
    <section className="text-center my-10" id="about">
        <SectionHeader 
            subHeader={'Our Story'}
            mainHeader={'About Us'}
        />
        <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-4 text-gray-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto natus eaque doloribus adipisci sint non laudantium minima, nostrum temporibus quia optio officia, quae minus praesentium quibusdam deserunt, modi mollitia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto natus eaque doloribus adipisci sint non laudantium minima, nostrum temporibus quia optio officia, quae minus praesentium quibusdam deserunt, modi mollitia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto natus eaque doloribus adipisci sint non laudantium minima, nostrum </p>
        </div>
    </section>
  )
}

export default About;