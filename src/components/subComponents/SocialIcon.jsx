// eslint-disable-next-line react/prop-types
export default function SocialIcon({ url, active, fontawesome, name }) {
  return (
    <a
      href={url}
      className={`${active ? "st-social-btn active" : "st-social-btn"}`}
    >
      <span className="st-social-icon">
        <i className={`fab ${fontawesome}`}></i>
      </span>
      <span className="st-icon-name">{name}</span>
    </a>
  );
}
