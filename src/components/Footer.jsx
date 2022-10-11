import React from 'react'

export const Footer = () => {
	return (
		<>
      <footer className="container-fluid text-white py-3 bg-dark position-absolute bottom-0">
        <div className="container">
        <div className="row mx-auto">
          <div className="col font-weight-bold ">
					<i class="fa-brands fa-github fa-2x me-4"></i>
            Developed by:
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/fmiguezo"
              target="_blank"
              rel="noreferrer"
            >
              Florencia Miguez
            </a>
          </div>
          <div className="col text-footer">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Guardini Philama
            </a>
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/javierhuebra"
              target="_blank"
              rel="noreferrer"
            >
              Javier Huebra
            </a>
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/hernandw"
              target="_blank"
              rel="noreferrer"
            >
              Williams Hernández
            </a>
          </div>
        </div>
        </div>
      </footer>
    </>
	)
}
