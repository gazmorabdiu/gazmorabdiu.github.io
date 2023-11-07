import Card from "./subComponents/Card";
import serviceDate from "../data/services.json";
// import { imagePath } from "../../config";

export default function Service() {
  const services = serviceDate.map((item, index) => (
    <Card
      key={index}
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">SERVICES</h4>
          <h2 className="st-section-heading-subtitle">SERVICES</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="row">{services}</div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
