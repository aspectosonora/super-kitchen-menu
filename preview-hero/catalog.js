(() => {
  const asset = "../Recursos/SK_assets_clickson/";
  const icon = (name) => `${asset}iconos/${name}.svg`;
  const photos = "../Fotos/Foto Cuadrada DIDI/";
  const productPhotos = `${asset}productos/`;
  const CATALOG_MASCOT_SOURCE = "../Recursos/Recursos Externos SK/Personaje/Stickers/12-B.png";
  const CART_MASCOT_SOURCE = "../Recursos/SK_assets_clickson/mascota/chef-principal.png";
  const CART_KEY = "super-kitchen-order-v1";
  const products = [
    {id:"teriyaki",category:"Especialidades",name:"Teriyaki",description:"Salteado de cebolla, morrón, calabaza, zanahoria y brócoli. Bañado en salsa teriyaki, acompañado con arroz.",image:photos+"Teriyaki de pollo.png",choices:[{label:"Proteína",options:[["Pollo",139],["Res",164]]}]},
    {id:"pechuga",category:"Especialidades",name:"Pechuga Grill",description:"Pollo con vegetales salteados (zanahoria, brócoli, calabaza, cebolla blanca y morrón) y salsa roja, acompañado de arroz.",image:photos+"Pechuga Grill.png",choices:[],price:139},
    {id:"pastas",category:"Especialidades",name:"Pastas",description:"Spaghetti con verduras salteadas (zanahoria, brócoli, calabaza, cebolla blanca y morrón), servido con ensalada fresca. Elige salsa Teriyaki, Chipotle o Verde.",image:photos+"Pasta Verde de Pollo.png",choices:[{label:"Proteína",options:[["Pollo",139],["Res",164]]},{label:"Salsa",options:[["Teriyaki"],["Chipotle"],["Verde"]]}]},
    {id:"papas",category:"Especialidades",name:"Pollo con papas",description:"Trozos de pollo con papas en salsa a tu elección, acompañado de ensalada fresca y parmesano.",image:productPhotos+"pollo-papas-chipotle.webp",choices:[{label:"Salsa",options:[["Brava"],["Verde"],["Chipotle"]]}],price:139},
    {id:"ensalada",category:"Especialidades",name:"Ensalada",description:"Mix fresco de lechuga, col morada, pepino, jitomate, almendras y arándanos. Elige pollo, res o atún sellado con ajonjolí, con aderezo Ranch o de Jamaica.",image:photos+"Ensalada de Pollo.png",choices:[{label:"Proteína",options:[["Pollo",139],["Res",164],["Atún sellado",164]]},{label:"Aderezo",options:[["Ranch"],["Jamaica"]]}]},
    {id:"ceviche",category:"Especialidades",name:"Ceviche de atún",description:"Atún fresco con cebolla, tomate, pepino, chile jalapeño, mango y aguacate. Se acompaña con clamato y salseado especial.",image:productPhotos+"ceviche-atun.webp",choices:[],price:164},
    {id:"tiradito",category:"Especialidades",name:"Tiradito de atún",description:"Tiras de atún bañadas con nuestro salseado de la casa, acompañadas de ajonjolí, cubitos de pepino, chile jalapeño y aguacate, coronado con cebolla morada en tiras.",image:photos+"Tiradito de Atún.png",choices:[],price:164},
    {id:"bowl",category:"Bowls",name:"Bowl",description:"Base de arroz con pepino, aguacate y zanahoria. Se sirve con salsa de soya y aderezo chipotle, natural o con crema/salsa de tu elección.",image:photos+"Bowl de Pollo.png",choices:[{label:"Proteína",options:[["Pollo",139],["Res",164],["Atún",164],["Atún sellado",164]]},{label:"Estilo",options:[["Natural"],["Teriyaki"],["Spicy"],["Green Bowl"],["Chipotle Bowl"]]},{label:"Preparación",options:[["Natural"],["Con crema/salsa de tu elección"]]}]},
    {id:"teri-bowl",category:"Bowls",name:"Teri Bowl",description:"Teri Bowl de pollo.",image:photos+"Teribowl.png",choices:[],price:139},
    {id:"spicy-bowl",category:"Bowls",name:"Spicy Bowl",description:"Spicy Bowl de pollo.",image:photos+"Spicy Bowl.png",choices:[],price:139},
    {id:"chipotle-bowl",category:"Bowls",name:"Chipotle Bowl",description:"Chipotle Bowl de pollo.",image:photos+"Chipotle Bowl.png",choices:[],price:139},
    {id:"green-bowl",category:"Bowls",name:"Green Bowl",description:"Green Bowl de pollo.",image:photos+"Green Bowl.png",choices:[],price:139},
    {id:"extra-proteina",category:"Extras",name:"Porción extra de proteína",description:"Elige pollo, res o atún.",image:photos+"Bowl de Atún.png",choices:[{label:"Proteína",options:[["Pollo",39],["Res",49],["Atún",49]]}]},
    {id:"bebida-500",category:"Bebidas",name:"Bebida 500 ml",description:"Limonada, té o Jamaica sin azúcar (Stevia).",image:productPhotos+"bebidas.webp",choices:[{label:"Bebida",options:[["Limonada"],["Té"],["Jamaica sin azúcar (Stevia)"]]}],price:35},
    {id:"coca-355",category:"Bebidas",name:"Coca Cola 355 ml",description:"Coca Cola Zero o Light.",image:photos+"Bebidas.png",choices:[{label:"Variante",options:[["Zero"],["Light"]]}],price:35},
    {id:"coca-600",category:"Bebidas",name:"Coca Cola 600 ml",description:"Coca Cola Zero o Light.",image:photos+"Bebidas.png",choices:[{label:"Variante",options:[["Zero"],["Light"]]}],price:35},
    {id:"aderezo",category:"Aderezos",name:"Aderezo embotellado",description:"Aderezo para llevar. Sabores: Teriyaki, Ranch o Chipotle.",image:productPhotos+"aderezo-chipotle.webp",choices:[{label:"Sabor",options:[["Teriyaki"],["Ranch"],["Chipotle"]]}],price:99}
  ];
  const categories = [
    {name:"Especialidades",icon:"especialidades"},
    {name:"Bowls",icon:"bowls"},
    {name:"Bebidas",icon:"bebidas"},
    {name:"Aderezos",icon:"aderezos"},
    {name:"Extras",icon:"extras"}
  ];
  const $ = (selector, root=document) => root.querySelector(selector);
  $("#catalog-mascot").src = CATALOG_MASCOT_SOURCE;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const categoryList = $("#category-list"), productSection = $("#product-section"), productGrid = $("#product-grid");
  const search = $("#catalog-search"), clearSearch = $("#clear-search");
  const money = (amount) => `$${amount}`;
  const normalize = (value) => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let activeCategory = "Especialidades", activeProduct = null, modalQuantity = 1, previousFocus = null;
  function loadCart() {
    try {
      const stored = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      if (!Array.isArray(stored)) return [];
      return stored.flatMap((entry) => {
        const product = products.find((item) => item.id === entry.id);
        const quantity = Math.floor(Number(entry.quantity));
        const price = Number(entry.price);
        if (!product || quantity < 1 || !Number.isFinite(price) || price < 0) return [];
        return [{id:product.id,name:product.name,options:Array.isArray(entry.options)?entry.options.map(String):[],notes:String(entry.notes||""),price,quantity,image:product.image}];
      });
    } catch { return []; }
  }
  let cart = loadCart();
  function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {} }
  function productSearchText(item) {
    return normalize(`${item.name} ${item.description} ${item.category} ${item.choices.map((group) => `${group.label} ${group.options.map((option) => option[0]).join(" ")}`).join(" ")}`);
  }
  function matchingProducts() {
    const query = normalize(search.value.trim());
    if (query) return products.filter((item) => productSearchText(item).includes(query));
    return activeCategory ? products.filter((item) => item.category === activeCategory) : [];
  }
  function renderCategories() {
    const query = normalize(search.value.trim());
    const shown = query ? categories.filter((category) => products.some((item) => item.category === category.name && productSearchText(item).includes(query))) : categories;
    categoryList.innerHTML = shown.map((category) => `<button class="category-card" type="button" data-category="${category.name}" aria-pressed="${activeCategory === category.name && !query}"><img src="${icon(category.icon)}" alt=""><strong>${category.name}</strong></button>`).join("");
    categoryList.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
      activeCategory = activeCategory === button.dataset.category ? "" : button.dataset.category;
      search.value = ""; clearSearch.hidden = true; renderCategories(); renderProducts();
    }));
  }
  function minimumPrice(item) {
    const values = item.choices.flatMap((group) => group.options.map((option) => option[1]).filter(Number.isFinite));
    if (Number.isFinite(item.price)) values.push(item.price);
    return values.length ? Math.min(...values) : null;
  }
  function renderProducts() {
    const list = matchingProducts();
    if (!activeCategory && !search.value.trim()) { productSection.hidden = true; return; }
    $("#product-category-title").textContent = search.value.trim() ? "Resultados" : activeCategory;
    productGrid.innerHTML = list.length ? list.map((item) => {
      const price = minimumPrice(item);
      const label = price === null ? "Consultar" : `${item.choices.some((group) => group.options.some((option) => Number.isFinite(option[1]))) ? "Desde " : ""}${money(price)}`;
      return `<article class="product-card" data-product-card="${item.id}" tabindex="0" role="button" aria-label="Ver ${escapeHtml(item.name)}${price === null ? "" : `, ${label}`}" aria-haspopup="dialog"><div class="product-card__image"><img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy"></div><div class="product-card__shade"></div><div class="product-card__body"><h4>${escapeHtml(item.name)}</h4><div class="product-card__bottom"><strong class="product-card__price">${label}</strong><span class="product-card__open" aria-hidden="true"><img src="${icon("flecha")}" alt=""></span></div></div></article>`;
    }).join("") : `<p class="catalog__empty">${search.value.trim()?"No encontramos coincidencias.":"Elige una categoría para ver sus platillos."}</p>`;
    productSection.hidden = false;
    productGrid.querySelectorAll("[data-product-card]").forEach((card) => {
      const open = () => openProduct(card.dataset.productCard);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
    });
  }
  $("#close-category").addEventListener("click", () => { activeCategory = ""; renderCategories(); renderProducts(); });
  search.addEventListener("input", () => { clearSearch.hidden = !search.value; renderCategories(); renderProducts(); });
  clearSearch.addEventListener("click", () => { search.value = ""; clearSearch.hidden = true; renderCategories(); renderProducts(); search.focus(); });
  $("#catalog-menu-button").addEventListener("click", () => { $("#category-list").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"}); });
  $("#login-button").addEventListener("click", () => { $("#account-status").textContent = "El acceso a tu cuenta está en preparación."; });

  const modal = document.createElement("div");
  modal.className = "product-modal"; modal.hidden = true; modal.setAttribute("role", "presentation");
  modal.innerHTML = `<section class="product-modal__panel" role="dialog" aria-modal="true" aria-label="Configura tu platillo"><header class="product-modal__header"><button class="product-modal__back" type="button" aria-label="Volver al menú">‹</button><img src="./assets/logo-estrella-tagline.png" alt="Súper Kitchen"><button class="product-modal__cart" type="button" aria-label="Abrir mi pedido"><img src="${icon("carrito")}" alt=""></button></header><div class="product-modal__hero"><img id="modal-image" alt=""><button class="product-modal__close" type="button" aria-label="Cerrar detalle">‹</button></div><div class="product-modal__title-band"><h2 id="modal-name"></h2></div><div class="product-modal__content"><p class="product-modal__description" id="modal-description"></p><div id="modal-options"></div><label class="product-modal__notes"><span class="product-modal__notes-label">NOTAS (OPCIONAL)</span><textarea id="modal-notes" placeholder="Ej. sin cebolla"></textarea></label></div><div class="modal-controls"><div class="quantity-control"><button type="button" data-quantity="-1" aria-label="Quitar uno">−</button><strong id="modal-quantity">1</strong><button type="button" data-quantity="1" aria-label="Agregar uno">+</button></div><button class="add-to-cart" id="add-to-cart" type="button"></button></div></section>`;
  document.body.append(modal);
  const modalPanel = $(".product-modal__panel", modal);
  function selectedConfiguration() {
    const values = [];
    let price = activeProduct.price ?? null;
    for (const [groupIndex, group] of activeProduct.choices.entries()) {
      const checked = $( `input[name="option-${activeProduct.id}-${groupIndex}"]:checked`, modal);
      if (!checked) return null;
      values.push(`${group.label}: ${checked.value}`);
      if (checked.dataset.price) price = Number(checked.dataset.price);
    }
    return price === null ? null : {values,price};
  }
  function updateModalPrice() {
    const config = selectedConfiguration();
    $("#add-to-cart",modal).textContent = config ? `AGREGAR AL PEDIDO  ${money(config.price * modalQuantity)}` : "ELIGE TUS OPCIONES";
    $("#add-to-cart",modal).disabled = !config;
  }
  function setOverlayOpen(overlay, isOpen) {
    overlay.hidden = !isOpen;
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) { previousFocus = document.activeElement; requestAnimationFrame(() => $("button",overlay)?.focus({preventScroll:true})); }
    else if (previousFocus?.isConnected) previousFocus.focus({preventScroll:true});
  }
  function openProduct(id) {
    activeProduct = products.find((item) => item.id === id); if (!activeProduct) return;
    modalQuantity = 1;
    $("#modal-image",modal).src = activeProduct.image; $("#modal-image",modal).alt = activeProduct.name;
    $("#modal-name",modal).textContent = activeProduct.name; $("#modal-description",modal).textContent = activeProduct.description;
    $("#modal-notes",modal).value = ""; $("#modal-quantity",modal).textContent = modalQuantity;
    $("#modal-options",modal).innerHTML = activeProduct.choices.map((group, groupIndex) => `<fieldset class="option-group"><legend>${escapeHtml(group.label)}</legend><div class="option-list">${group.options.map(([label,price],optionIndex) => `<label class="option-chip"><input type="radio" name="option-${activeProduct.id}-${groupIndex}" value="${escapeHtml(label)}" ${Number.isFinite(price)?`data-price="${price}"`:""} ${optionIndex===0?"checked":""}><span>${escapeHtml(label)}${Number.isFinite(price)?` · ${money(price)}`:""}</span></label>`).join("")}</div></fieldset>`).join("");
    modal.querySelectorAll("input[type=radio]").forEach((input) => input.addEventListener("change", updateModalPrice));
    modalPanel.scrollTop = 0; setOverlayOpen(modal,true); updateModalPrice();
  }
  function closeProduct() { setOverlayOpen(modal,false); }
  $(".product-modal__back",modal).addEventListener("click",closeProduct);
  $(".product-modal__close",modal).addEventListener("click",closeProduct);
  $(".product-modal__cart",modal).addEventListener("click",() => { closeProduct(); openCart(); });
  modal.addEventListener("click",(event) => { if (event.target === modal) closeProduct(); });
  modal.querySelectorAll("[data-quantity]").forEach((button) => button.addEventListener("click",() => { modalQuantity=Math.max(1,modalQuantity+Number(button.dataset.quantity)); $("#modal-quantity",modal).textContent=modalQuantity; updateModalPrice(); }));

  const drawer = document.createElement("div"); drawer.className="cart-drawer"; drawer.hidden=true;
  drawer.innerHTML = `<section class="cart-drawer__panel" role="dialog" aria-modal="true" aria-label="Mi pedido"><header class="cart-drawer__header"><button class="cart-drawer__back" type="button" aria-label="Volver al menú">‹</button><h2>MI PEDIDO</h2><span></span></header><div class="cart-drawer__hero"><h3>TU<br>PEDIDO</h3><img src="${CART_MASCOT_SOURCE}" alt="Chef Súper Kitchen" width="1248" height="1732"></div><div class="cart-drawer__content"><form class="delivery-form" id="delivery-form" novalidate><h3>DATOS DE ENTREGA</h3><label>Nombre completo<input id="delivery-name" name="name" autocomplete="name" required placeholder="Tu nombre"></label><label>Teléfono<input id="delivery-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="Tu número de contacto"></label><fieldset><legend>¿Cómo recibes tu pedido?</legend><div class="delivery-form__choices"><label><input type="radio" name="delivery-type" value="Recoger" checked><span>Recoger</span></label><label><input type="radio" name="delivery-type" value="Domicilio"><span>Domicilio</span></label></div></fieldset><div class="delivery-form__address" id="delivery-address-fields" hidden><label>Dirección<input id="delivery-address" name="address" autocomplete="street-address" placeholder="Calle y número"></label><div class="delivery-form__row"><label>Colonia<input id="delivery-neighborhood" name="neighborhood" autocomplete="address-level3" placeholder="Colonia"></label><label>Referencia<input id="delivery-reference" name="reference" placeholder="Entre calles / referencia"></label></div></div><fieldset><legend>Método de pago</legend><div class="delivery-form__choices"><label><input type="radio" name="payment-method" value="Efectivo" checked><span>Efectivo</span></label><label><input type="radio" name="payment-method" value="Transferencia"><span>Transferencia</span></label></div></fieldset><label id="cash-change-fields">¿Con cuánto pagarás? (opcional)<input id="cash-change" name="cash" inputmode="decimal" placeholder="Monto para tu cambio"></label><label>Notas para tu pedido<textarea id="delivery-notes" name="notes" rows="2" placeholder="Indicaciones adicionales"></textarea></label></form><div class="cart-summary-heading"><h3>RESUMEN DE TU PEDIDO</h3><div id="cart-rows"></div><p class="cart-drawer__empty" id="cart-empty" hidden>Tu pedido está vacío.</p><div class="cart-total"><span>Subtotal de productos</span><strong id="cart-total"></strong></div><p class="cart-shipping-note" id="cart-shipping-note">El costo de envío se confirma por WhatsApp.</p></div><section class="cart-recommendations" id="cart-recommendations"><h4>COMPLETA TU PEDIDO</h4><div class="cart-recommendations__grid"><article class="cart-recommendation"><img src="${productPhotos}bebidas.webp" alt=""><div><strong>Bebida 500 ml</strong><small>$35</small></div><button type="button" data-recommend="bebida-500" aria-label="Configurar bebida">+</button></article><article class="cart-recommendation"><img src="${productPhotos}aderezo-chipotle.webp" alt=""><div><strong>Aderezo embotellado</strong><small>$99</small></div><button type="button" data-recommend="aderezo" aria-label="Configurar aderezo">+</button></article></div></section></div><div class="cart-actions"><button class="cart-clear" id="empty-cart" type="button">Vaciar</button><button id="send-order" type="button"><img src="${icon("whatsapp")}" alt="">ENVIAR PEDIDO POR WHATSAPP</button></div></section>`;
  document.body.append(drawer);
  const drawerPanel=$(".cart-drawer__panel",drawer);
  function openCart() { renderCart(); drawerPanel.scrollTop=0; setOverlayOpen(drawer,true); }
  function closeCart() { setOverlayOpen(drawer,false); }
  $("#open-cart").addEventListener("click",openCart);
  $(".cart-drawer__back",drawer).addEventListener("click",closeCart);
  drawer.addEventListener("click",(event) => { if(event.target===drawer) closeCart(); });
  drawer.querySelectorAll("[data-recommend]").forEach((button) => button.addEventListener("click",() => { const id=button.dataset.recommend; closeCart(); openProduct(id); }));
  const deliveryForm=$("#delivery-form",drawer);
  const addressFields=$("#delivery-address-fields",drawer);
  const cashChangeFields=$("#cash-change-fields",drawer);
  function syncDeliveryFields(){const isHome=$("input[name=delivery-type]:checked",drawer).value==="Domicilio";addressFields.hidden=!isHome;$("#delivery-address",drawer).required=isHome;$("#delivery-neighborhood",drawer).required=isHome;cashChangeFields.hidden=$("input[name=payment-method]:checked",drawer).value!=="Efectivo";}
  drawer.querySelectorAll('input[name="delivery-type"],input[name="payment-method"]').forEach((input)=>input.addEventListener("change",syncDeliveryFields));
  deliveryForm.addEventListener("submit",(event)=>event.preventDefault());
  syncDeliveryFields();
  function cartTotals() { return {count:cart.reduce((sum,item)=>sum+item.quantity,0),total:cart.reduce((sum,item)=>sum+item.price*item.quantity,0)}; }
  function renderCart() {
    saveCart();
    const {count,total}=cartTotals(), badge=$("#cart-count");
    badge.textContent=String(count); badge.hidden=count===0;
    $("#cart-rows",drawer).innerHTML=cart.map((item,index)=>`<article class="cart-row"><div class="cart-row__image"><img src="${item.image}" alt="" loading="lazy"></div><div class="cart-row__info"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.options.join(" · "))}${item.notes?` · Nota: ${escapeHtml(item.notes)}`:""}</small></div><strong class="cart-row__price">${money(item.price*item.quantity)}</strong><div class="cart-row__controls"><button type="button" data-cart-index="${index}" data-cart-delta="-1" aria-label="Quitar uno">−</button><strong>${item.quantity}</strong><button type="button" data-cart-index="${index}" data-cart-delta="1" aria-label="Agregar uno">+</button></div><button class="cart-row__remove" type="button" data-remove="${index}" aria-label="Eliminar ${escapeHtml(item.name)}"><img src="${icon("eliminar")}" alt=""></button></article>`).join("");
    $("#cart-total",drawer).textContent=money(total);
    $("#cart-empty",drawer).hidden=count>0;
    $("#empty-cart",drawer).disabled=count===0;
    $("#send-order",drawer).disabled=count===0;
    $("#cart-recommendations",drawer).hidden=count===0;
    drawer.querySelectorAll("[data-cart-index]").forEach((button)=>button.addEventListener("click",()=>{const item=cart[Number(button.dataset.cartIndex)];if(!item)return;item.quantity+=Number(button.dataset.cartDelta);if(item.quantity<1)cart.splice(Number(button.dataset.cartIndex),1);renderCart();}));
    drawer.querySelectorAll("[data-remove]").forEach((button)=>button.addEventListener("click",()=>{cart.splice(Number(button.dataset.remove),1);renderCart();}));
  }
  $("#add-to-cart",modal).addEventListener("click",()=>{
    const config=selectedConfiguration();if(!config)return;
    const notes=$("#modal-notes",modal).value.trim(),options=config.values;
    const found=cart.find((item)=>item.id===activeProduct.id&&item.options.join("|")===options.join("|")&&item.notes===notes);
    if(found)found.quantity+=modalQuantity;else cart.push({id:activeProduct.id,name:activeProduct.name,options,notes,price:config.price,quantity:modalQuantity,image:activeProduct.image});
    saveCart();closeProduct();renderCart();
  });
  $("#empty-cart",drawer).addEventListener("click",()=>{cart=[];renderCart();});
  $("#send-order",drawer).addEventListener("click",()=>{
    if(!cart.length)return;
    if(!deliveryForm.reportValidity())return;
    const lines=cart.map((item)=>`• ${item.quantity} x ${item.name}${item.options.length?` (${item.options.join(", ")})`:""}${item.notes?` — Nota: ${item.notes}`:""}: ${money(item.price*item.quantity)}`);
    const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
    const delivery=$("input[name=delivery-type]:checked",drawer).value,payment=$("input[name=payment-method]:checked",drawer).value;
    const address=delivery==="Domicilio"?`\nDirección: ${$("#delivery-address",drawer).value.trim()}\nColonia: ${$("#delivery-neighborhood",drawer).value.trim()}${$("#delivery-reference",drawer).value.trim()?`\nReferencia: ${$("#delivery-reference",drawer).value.trim()}`:""}`:"\nRecoger en: Nainari 210, Cd. Obregón";
    const cash=payment==="Efectivo"&&$("#cash-change",drawer).value.trim()?`\nPagaré con: $${$("#cash-change",drawer).value.trim()}`:"";
    const notes=$("#delivery-notes",drawer).value.trim();
    const message=`Hola, quiero hacer este pedido de Súper Kitchen:\nNombre: ${$("#delivery-name",drawer).value.trim()}\nTeléfono: ${$("#delivery-phone",drawer).value.trim()}\nEntrega: ${delivery}${address}\nPago: ${payment}${cash}${notes?`\nNotas: ${notes}`:""}\n\n${lines.join("\n")}\nSubtotal de productos: ${money(total)}\nEnvío: por confirmar\n¿Me confirman el costo de envío y disponibilidad?`;
    window.open(`https://wa.me/526442561819?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  });
  document.addEventListener("keydown",(event)=>{
    if(event.key==="Escape"){if(!modal.hidden)closeProduct();else if(!drawer.hidden)closeCart();}
    if(event.key==="Tab"&&(!modal.hidden||!drawer.hidden)){
      const overlay=!modal.hidden?modal:drawer,focusable=overlay.querySelectorAll('button:not(:disabled),input,textarea,[tabindex="0"]');
      if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  const catalog=$("#menu");let catalogWasActive=false,arrivalTimer,transitionTimer;
  const catalogTransition=document.createElement("div");catalogTransition.className="catalog-transition";catalogTransition.setAttribute("aria-hidden","true");document.body.append(catalogTransition);
  function playCatalogTransition(){catalogTransition.classList.remove("is-playing");void catalogTransition.offsetWidth;catalogTransition.classList.add("is-playing");window.clearTimeout(transitionTimer);transitionTimer=window.setTimeout(()=>catalogTransition.classList.remove("is-playing"),780);}
  function syncCatalogHeader(){
    const box=catalog.getBoundingClientRect(),active=box.top<=64&&box.bottom>64;
    document.body.classList.toggle("catalog-active",active);
    if(active&&!catalogWasActive){playCatalogTransition();document.body.classList.add("catalog-arriving");window.clearTimeout(arrivalTimer);arrivalTimer=window.setTimeout(()=>document.body.classList.remove("catalog-arriving"),950);}
    else if(!active){document.body.classList.remove("catalog-arriving");catalogTransition.classList.remove("is-playing");window.clearTimeout(arrivalTimer);window.clearTimeout(transitionTimer);}
    catalogWasActive=active;
  }
  window.addEventListener("scroll",syncCatalogHeader,{passive:true});window.addEventListener("resize",syncCatalogHeader);syncCatalogHeader();
  renderCategories();renderProducts();renderCart();
})();
