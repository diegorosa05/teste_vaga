let products = [
  { img: 'https://cdn.awsli.com.br/600x1000/1081/1081165/produto/2042806281e7f288bce.jpg', name: "Lustre suspenso rústico", priceOld: 1500.00, newPrice: 1000.00 },
  { img: 'https://m.media-amazon.com/images/I/71SOSaunZyL._AC_UF894,1000_QL80_.jpg', name: "Lampada", priceOld: 60.00, newPrice: 45.00 },
  { img: 'https://images.tcdn.com.br/img/img_prod/676091/lustre_pendente_de_rustico_30cm_modelo_goytacazes_imbuia_721_1_20200512094643.jpg', name: "Lustre suspenso rústico", priceOld: 25.00, newPrice: 17.00 },
  { img: 'https://cdn.leroymerlin.com.br/products/jogo_de_ferramentas_108_pecas_dexter__89716123_0001_300x300.jpg', name: "Kit de ferramentas", priceOld: 100.00, newPrice: 80.00 },
  { img: 'https://static3.tcdn.com.br/img/img_prod/840169/garfo_de_mesa_inox_conjunto_com_06_yins_home_10499_1_cc8df87c194f4938566d9a0052ac102b.jpg', name: "Garfos de mesa inox", priceOld: 15.00, newPrice: 8.00 },
  { img: 'https://images.tcdn.com.br/img/img_prod/548063/lustre_torneado_de_madeira_rustica_para_sala_de_jantar_grande_1541_1_20230223224053.jpg', name: "Lustre suspenso rústico", priceOld: 120.00, newPrice: 100.00 },
  { img: 'https://armazemcoral.agilecdn.com.br/717843_1.jpg', name: "Ventilador 2 em 1, mesa e parede", priceOld: 50.00, newPrice: 30.00 },
  { img: 'https://images.tcdn.com.br/img/img_prod/1056210/kit_2_lustres_luminaria_pendente_em_mdf_22x22_191_1_fb2a58830f04cc69c759d8ae54611122.png', name: "Lustre suspenso rustico", priceOld: 20.00, newPrice: 10.00 }
];

function renderizarItens() {
  const container = document.getElementById("render");
  container.innerHTML = "";
  products.forEach((item) => {
    const elementoItem = document.createElement("div");
    elementoItem.innerHTML = `
          <img class="img" src="${item.img}" alt="${item.name}">
          <h1 class="titleCard">${item.name}</h1>
          <div class="CardPayment">
              <span class="text__risc">R$ ${item.priceOld.toFixed(2)}</span>
              <span class="text_CardPayment">R$ ${item.newPrice.toFixed(2)}</span>
          </div>
          <p class="CardPar" style="${item.newPrice < 40 ? 'display: none;' : ''}">ou em 3x de ${(item.newPrice / 3).toFixed(2)}</p>
      `;
    container.appendChild(elementoItem);
  });
}

window.onload = renderizarItens;

