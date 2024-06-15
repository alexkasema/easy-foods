import Image from "next/image";

import Right from "../Icons/Right";

const Hero = () => {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Delicious <span className="text-accent">Meals</span> <br />
          Delivered Fast
          <br />
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Experience the ease of online food ordering with Easy Foods. Choose
          from a variety of local delicacies and get your favorite dishes
          delivered right to your doorstep, quickly and effortlessly.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block rounded-2xl">
        <Image
          src={"/deliciousMeals.jpg"}
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          alt={"meals"}
        />
      </div>
    </section>
  );
};

export default Hero;
