
import Link from 'next/link'

export default function NotFound() {
    return (

        <main className="w-100">
            {/* <!--404 error start-->*/}
            <div className="container d-flex flex-column overflow-hidden">
                <div className="row align-items-center justify-content-center min-vh-100 text-center">
                    <div className="col-lg-6 col-12">
                        {/*<div className="position-relative mb-7">*/}
                        {/*    <div className="scene d-none d-lg-block" data-relative-input="true">*/}
                        {/*        <div className="position-absolute top-0" data-depth="0.5">*/}
                        {/*            <img src="assets/images/error/stars.svg" alt/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="scene d-none d-lg-block" data-relative-input="true">*/}
                        {/*        <div className="position-absolute" data-depth="0.1">*/}
                        {/*            <img src="assets/images/error/rocket.svg" alt/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="scene d-none d-lg-block" data-relative-input="true">*/}
                        {/*        <div className="position-absolute top-0 start-50 translate-middle"*/}
                        {/*             style="margin-top: -80px; margin-left: -80px" data-depth="0.1">*/}
                        {/*            <img src="assets/images/error/globe.svg" alt/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="scene d-none d-lg-block" data-relative-input="true">*/}
                        {/*        <div className="position-absolute start-50" data-depth="0.1">*/}
                        {/*            <img src="assets/images/error/astronut.svg" alt*/}
                        {/*                 style="top: -110px; position: absolute; bottom: 0"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="position-relative z-n1">*/}
                        {/*        <img src="assets/images/error/404-number.svg" alt className="img-fluid"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="scene d-none d-lg-block" data-relative-input="true">*/}
                        {/*        <div className="position-absolute start-100 bottom-0" style data-depth="0.1">*/}
                        {/*            <img src="assets/images/error/planet.svg" alt/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <h2>Oops page not found</h2>
                        <p>The page you are looking for is not available.</p>

                        <a href="index.html" className="btn btn-primary">Go back to home</a>
                    </div>
                </div>
            </div>
            <div className="position-absolute end-0 bottom-0 m-4 d-none">
                <div className="dropdown">
                    <button className="btn btn-light btn-icon rounded-circle d-flex align-items-center" type="button"
                            aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                        <i className="bi theme-icon-active"></i>
                        <span className="visually-hidden bs-theme-text">Toggle theme</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center"
                                    data-bs-theme-value="light" aria-pressed="false">
                                <i className="bi theme-icon bi-sun-fill"></i>
                                <span className="ms-2">Light</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center"
                                    data-bs-theme-value="dark" aria-pressed="false">
                                <i className="bi theme-icon bi-moon-stars-fill"></i>
                                <span className="ms-2">Dark</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center active"
                                    data-bs-theme-value="auto" aria-pressed="true">
                                <i className="bi theme-icon bi-circle-half"></i>
                                <span className="ms-2">Auto</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!--404 error end-->*/}
        </main>
    )
}