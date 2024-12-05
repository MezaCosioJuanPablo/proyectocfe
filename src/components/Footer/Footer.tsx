const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h5 className="text-lg font-semibold">Mi Sitio Web</h5>
          <p>&copy; 2024 Todos los derechos reservados</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6"></div>
      </div>
    </footer>
  );
};

export default Footer;
