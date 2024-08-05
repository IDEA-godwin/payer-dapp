import Image from "next/image";


export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg transparent navbar-transparent navbar-dark">
        <div className="container px-3">
          <a href='/' className="navbar-brand text-success">GreenPayer</a>
          <button className="navbar-toggler offcanvas-nav-btn" type="button">
            <i className="bi bi-list"></i>
          </button>
          <div className="offcanvas offcanvas-start offcanvas-nav">
            <div className="offcanvas-header">
              <a role="button" className="text-inverse">
                <Image src={'/images/logo/logo.svg'} alt="logo img" width={34} height={34}/>
              </a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                      aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center">
              <ul className="navbar-nav mx-auto align-items-lg-center">
                <li className="nav-item">
                  <a className="nav-link" role="button">TechandSun</a>
                </li>
              </ul>
              {/*<div className="mt-3 mt-lg-0 d-flex align-items-center">*/}
              {/*  <a role='button' className="btn btn-primary mx-2">Get Started</a>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
