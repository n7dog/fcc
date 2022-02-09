import useDocumentTitle from '../../hooks/useDocumentTitle'

function Praise() {
  useDocumentTitle('Praise')
  return (
    <div className="praise">
      <section className="praise-banner">
        <h1 className="praise-banner-title">praise & worship</h1>
      </section>
      <section className="praise-intro">
        <div className="praise-intro-picture"></div>
        <div className="praise-intro-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="praise-intro-description-contact">
            Contact: Bro Nathan Lardizabal{' '}
            <a href="tel:647-523-9361">(647) 523-9361</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Praise
