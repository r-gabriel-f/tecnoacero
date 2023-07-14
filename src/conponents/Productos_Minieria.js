import React from 'react'
import "../conponents/Productos.css";

import p from "../assets/img/valores.PNG";
import locomotorarhino from "../assets/img/locomotorarhino.jpg";
import carrito from "../assets/img/carrometalero.jpg";
import carrogranby from "../assets/img/carrogranby.jpg";
export const Productos_Minieria = () => {
  return (
    <sectionm className="container-productos">
    <div className="productos">
      <div className="nomnbre-producto">
        <h2>Locomotora Rhino</h2>
      </div>
      <div className="container-img-producto">
        <div className="img-producto">
          <img src={locomotorarhino} href id="p" className="img-productos" />
          <div className="botones-detalles">
            <button type="button" class="btn btn-primary">
              Ver Detalles
            </button>
          </div>
        </div>
        <div className="descripcion-producto">
          <h3>Descripcion</h3>
          <p>
            Superar las expectativas de nuestros clientes con satisfacer las
            necesidades y los requerimientos de las industrias mediante la
            excelencia y necesidades y los requerimientos de las industrias
            mediante la excelencia y calidad de los productos que elaboramos,
            trabajar con entrega y prefesionalismo para ofrecer la mejor
            calidad, beneficiando a nuestros clientes con la adquisición de
            sus pedidos (acero)
          </p>
        </div>
      </div>
    </div>
    <div className="productos">
      <div className="nomnbre-producto">
        <h2>Carro Metalero</h2>
      </div>
      <div className="container-img-producto">
        <div className="descripcion-producto">
          <h3>Descripcion</h3>
          <p>
            Superar las expectativas de nuestros clientes con satisfacer las
            necesidades y los requerimientos de las industrias mediante la
            excelencia y necesidades y los requerimientos de las industrias
            mediante la excelencia y calidad de los productos que elaboramos,
            trabajar con entrega y prefesionalismo para ofrecer la mejor
            calidad, beneficiando a nuestros clientes con la adquisición de
            sus pedidos (acero)
          </p>
        </div>
        <div className="img-producto">
          <img src={carrito} href id="p" className="img-productos" />
          <div className="botones-detalles">
            <button type="button" class="btn btn-primary">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="productos">
      <div className="nomnbre-producto">
        <h2>Carro Granby</h2>
      </div>
      <div className="container-img-producto">
        <div className="img-producto">
          <img src={carrogranby} href id="p" className="img-productos" />
          <div className="botones-detalles">
            <button type="button" class="btn btn-primary">
              Ver Detalles
            </button>
          </div>
        </div>
        <div className="descripcion-producto">
          <h3>Descripcion</h3>
          <p>
            Superar las expectativas de nuestros clientes con satisfacer las
            necesidades y los requerimientos de las industrias mediante la
            excelencia y necesidades y los requerimientos de las industrias
            mediante la excelencia y calidad de los productos que elaboramos,
            trabajar con entrega y prefesionalismo para ofrecer la mejor
            calidad, beneficiando a nuestros clientes con la adquisición de
            sus pedidos (acero)
          </p>
        </div>
      </div>
    </div>
  </sectionm>
  )
}
