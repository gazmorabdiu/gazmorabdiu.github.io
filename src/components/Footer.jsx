export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="st-copyright-wrap text-center">
          <div className="st-copyright-text">
            © {new Date(Date.now()).getFullYear()} - Gazmor. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
