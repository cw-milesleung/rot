const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Miles Leung {currentYear}</p>
    </footer>
  );
};
export default Footer;
