import { Slide,} from "react-reveal";
import './sectionCard.css'

const SectionCard = () => (
    <div className="home__services">
    <Slide bottom>
      <div className="home__servicesHeader">
        <h2 className="home__servicesHeaderTitle">Services</h2>
        <p className="home__servicesHeaderText">
          We can help you bring your product to life - <br /> whether it's a
          Minimum Viable Product, UX/UI <br /> Services or help to scale
          your company.
        </p>
      </div>
    </Slide>
    <Slide bottom>
      <div className="home__serviceOptions">
        {serviceOptions?.map(({ icon, title, text }, index) => (
          <ServiceOptionCard
            key={index}
            title={title}
            icon={icon}
            text={text}
          />
        ))}
      </div>
    </Slide>
  </div>
  )

export default SectionCard