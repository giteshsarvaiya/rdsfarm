import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from 'lucide-react';
import ReviewsSection from '@/components/reviews';

export default function Home() {
  return (
    <div className=" container flex flex-col bg-gray-200">

      <main className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero_section.png"
        alt="RDs Farm landscape Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-center">
            <Image 
            src={"/icon.png"}
            alt="RD's Logo"
            height={60}
            width={60}
            className="filter brightness-125"
            />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Welcome to RD&apos;s Farm
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Your perfect destination for celebrations, weddings, parties and getaways <br />
        </p>
        <Link href={"#contact"}>
        <button className="text-lg px-8 py-3 bg-[#ec743c] rounded-xl hover:bg-[#ec743c]/70">
          Book Now
        </button>
        </Link>
      </div>
    </main>

    <section id="about" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About RD&apos;s Farm</h2>
    
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground">
          Nestled in the heart of Ahmedabad, RD&apos;s Farm has been a cherished destination for celebrations and getaways since 2019. Our sprawling venue of lush landscapes provide the perfect backdrop for unforgettable experiences.
        </p>
        <p className="text-lg text-muted-foreground">
          At RD&apos;s Farm, we believe in creating moments that last a lifetime. Whether you're planning a dream wedding, a corporate retreat, or a family reunion, our dedicated team ensures every detail is perfect.
        </p>
        <Link href={"/gallery"}>
        <button className="border border-muted-foreground py-2 px-4 mt-4 text-lg text-white font-semibold rounded-lg bg-[#ec743c] hover:bg-[#ec743c]/70  transition duration-300"> Watch Our Gallery</button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/image1.jpg"
          alt="RDs Farm scenery"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/image2.jpg"
          alt="RDs Farm event space"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/image3.jpg"
          alt="RDs Farm accommodation"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/image4.jpg"
          alt="RDs Farm activities"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>

    <div className="mt-16">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose RD&apos;s Farm?</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Breathtaking Venues", description: "From swimming pools to open lawns, cozy rooms, a mini theater, and a dedicated kids' section, we offer a variety of spaces to suit any event." },
          { title: "Farm-to-Table Dining", description: "Experience the freshest ingredients in our gourmet catering services." },
          { title: "Unparalleled Service", description: "Our dedicated team ensures every detail of your stay or event is perfect." }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<ReviewsSection />
<section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.705759379259!2d72.69377987509333!3d23.07124657913969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870fabfffcb3%3A0x826dded8e2a88070!2sRD&#39;s%20Farm!5e0!3m2!1sen!2sin!4v1729065353150!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-full h-full rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch for Booking related queries</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-2" />
                  <a href="tel:+919998567000" className="hover:underline">+91 9998567000</a>, 
                  <a href="tel:+919725252526" className="hover:underline ml-2">+91 9725252526</a>
                </div>
                {/* <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-2" />
                  <a href="mailto:info@rdsfarm.com" className="hover:underline">info@rdsfarm.com</a>
                </div> */}
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>              RD&apos;s Farm <br/>

Near Laxmi Sky City, Dastan Circle, Kathwada, Ahmedabad - 382330</span>
                </div>
                {/* <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-2" />
                  <span>Mon-Fri: 9am-5pm, Sat-Sun: 10am-4pm</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
