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
          <img src="https://joaquindecima.gitlab.io/assets/img/myphoto.jpg" />
        </div>

        <span className="title p-color">Joaquin Decima</span>
        <span className="subtitle p-color">Programador</span>
      </div>

      <ul className="sidebar-menu">
        <li className="group-title">Sobre Mi</li>
        <li><a routerLink=""><span className="mif-home icon"></span>Mi Sitio</a></li>
        <li><a routerLink="studies"><span className="mif-books icon"></span>Linkedin</a></li>

        <li className="group-title">Otros</li>
        <li><a routerLink="portfolio"><span className="mif-suitcase icon"></span>Blog</a></li>

        <li className="group-title">Contacto</li>
        <li><a routerLink="projects"><span className="mif-create-new-folder icon"></span>Telegram</a></li>
        <li><a routerLink="projects"><span className="mif-create-new-folder icon"></span>WhatsApp</a></li>
        <li><a routerLink="projects"><span className="mif-create-new-folder icon"></span>Email</a></li>
      </ul>
    </aside>
  );
}

export default SideBar;
