

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="text-center p-8 mt-12 border-t text-gray-500">
        <p>&copy; {year} All rights reserved</p>
    </footer>
  )
}

export default Footer;