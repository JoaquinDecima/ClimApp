import React from 'react';

import './sidebar.css';

function SideBar() {

  return (
    <aside
      id="sdbar"
      className="sidebar"
      data-toggle="#openMenu"
      data-role="sidebar">

      <div
        className="sidebar-header"
        data-image="https://i.postimg.cc/q796pYZ2/fotoefectos-com.jpg">

        <a href="/" className="fg-white sub-action"
           onclick="Metro.sidebar.close('#sdbar'); return false;">
          <span className="mif-arrow-left mif-2x"></span>
        </a>

        <div className="avatar">
          <img
            src="https://joaquindecima.gitlab.io/assets/img/myphoto.jpg"
            alt="Joaquin Decima" />
        </div>

        <span className="title p-color">Joaquin Decima</span>
        <span className="subtitle p-color">Software Developer</span>
      </div>

      <ul className="sidebar-menu">
        <li className="group-title">Sobre Mi</li>
        <li><a target="_blank" rel="noreferrer" href="https://joaquindecima.gitlab.io/">
          <span className="mif-home icon"></span>Mi Sitio
        </a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joaquindecima/">
          <span className="mif-linkedin icon"></span>Linkedin
        </a></li>
        <li className="group-title">Otros</li>
        <li><a target="_blank" rel="noreferrer" href="https://patojad.com.ar/">
          <span className="mif-blogger icon"></span>Blog
        </a></li>
        <li className="group-title">Contacto</li>
        <li><a target="_blank" rel="noreferrer" href="https://t.me/PatoJAD">
          <span className="mif-paper-plane icon"></span>Telegram
        </a></li>
        <li><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=541160109950&text=Gracias%20por%20comunicarte.%20%C2%BFEn%20que%20puedo%20ayudarte%3F">
          <span className="mif-whatsapp icon"></span>WhatsApp
        </a></li>
        <li><a target="_blank" rel="noreferrer" href="mailto:joaquin.decima@gmail.com">
          <span className="mif-mail icon"></span>Email
        </a></li>
      </ul>
    </aside>
  );
}

export default SideBar;
