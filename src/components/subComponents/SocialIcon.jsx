// eslint-disable-next-line react/prop-types, no-unused-vars
export default function SocialIcon({ url, active, fontawesome, name }) {
  return (
    <a
      href={url}
      className={`${/* active ? "st-social-btn active" : */ "st-social-btn"}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="st-social-icon">
        <i className={`fab ${fontawesome}`}></i>
      </span>
      <span className="st-icon-name">{name}</span>
    </a>
  );
}
