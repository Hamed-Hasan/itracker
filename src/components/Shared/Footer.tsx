import '../../styles/main.css'

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-primary dark:bg-black text-base-content">
        <div className='pl-12 lg:pl-40'>
          <span className="footer-title text-white">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className='pl-12 lg:pl-0'>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className='pl-12 lg:pl-0'>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className='pl-12 lg:pl-0'>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input  w-full pr-16" />
              <button className="btn bg-accent hover:bg-accent-focus dark:bg-black absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;