function Plataforma() {
    let plataforma = navigator.platform;
    switch (plataforma) {
      case "Linux armv7l":
      case "Linux armv8l":
      case "iPhone":
      case "iPad":
        plataforma = "movil";
        break;
      case "win32":
        plataforma = "escritorio";
        //plataforma = "movil";
        break;
      default:
        plataforma = "escritorio";
        //plataforma = "movil";
        break;
    }
    sessionStorage.setItem("tipoPlataforma", plataforma);
    return plataforma;
  }

  export default Plataforma