var wrapper;
function closeAAA() {
    wrapper.setAttribute("style", "visibility:hidden;display:none")
}
Packetaaaaa = window.Packetaaaaa || {},
Packetaaaaa.Viewport = {
    element: null,
    originalValue: null,
    set: function() {
        Packetaaaaa.Viewport.element || (Packetaaaaa.Viewport.element = document.querySelector("meta[name=viewport]"),
        Packetaaaaa.Viewport.element ? Packetaaaaa.Viewport.originalValue = Packetaaaaa.Viewport.element.getAttribute("content") : (Packetaaaaa.Viewport.originalValue = "user-scalable=yes",
        Packetaaaaa.Viewport.element = document.createElement("meta"),
        Packetaaaaa.Viewport.element.setAttribute("name", "viewport"),
        (document.head || document.getElementsByTagName("head")[0]).appendChild(Packeta.Viewport.element))),
        Packetaaaaa.Viewport.element.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes")
    },
    restore: function() {
        null !== Packetaaaaa.Viewport.originalValue && Packetaaaaa.Viewport.element.setAttribute("content", Packetaaaaa.Viewport.originalValue)
    }
},
Packetaaaaa.Widget = {
    baseUrl: "https://ps-maps.gls-czech.cz/?find=1&header=1",
    close: function() {},
    pick: function(e, t, a, i, n) {
        Packetaaaaa.Widget.close(),
        void 0 === i && (i = {}),
        "version"in i || (i.version = 3),
        i.apiKey = e,
        i.usePreProdWidgetVersion = !0;
        var d = Packetaaaaa.Widget.baseUrl
          , d = "yes" === e ? "https://ps-maps.gls-czech.cz/?find=1&header=1&lng=sk&ctrcode=SK" : "https://ps-maps.gls-czech.cz/?find=1&header=1"
          , e = null != n;
        e ? wrapper = n : (Packetaaaaa.Viewport.set(),
        menu = document.createElement("div"),
        menu.setAttribute("class", "menu"),
        menu.setAttribute("style", "background: #061ab1;color: #fff;font-weight: 700;padding: 0 0 0 1rem;height: 40px;font-size: 22px;width: 100%;"),
        nazev = document.createElement("span"),
        nazev.classList.add("ui-dialog-title"),
        nazev.textContent = "Vyberte výdejní místo GLS",
        button = document.createElement("button"),
        button.setAttribute("type", "button"),
        button.setAttribute("title", "Zavřít"),
        button.setAttribute("onclick", "closeAAA()"),
        button.setAttribute("style", "float:right;background:0;display:flex;padding: 0;"),
        span = document.createElement("span"),
        span.textContent = "X",
        span.setAttribute("style", "background:#ffd100;color:#1601ff;width:40px;height:40px;border-radius:6px"),
        span.setAttribute("onMouseOver", "this.style.backgroundColor='#d3d3d3',this.style.color='#ffd100'"),
        span.setAttribute("onMouseOut", "this.style.backgroundColor='#ffd100',this.style.color='#1601ff'"),
        (wrapper = document.createElement("div")).setAttribute("style", "z-index: 999999; position: fixed; -webkit-backface-visibility: hidden; left: 0;top:0; width: 100%;display:flex;flex-direction: column;align-items: center; height: 100%; background: " + (i.overlayColor || "rgba(0, 0, 0, 0.3)") + "; "),
        wrapper.addEventListener("click", function() {
            Packetaaaaa.Widget.close()
        }),
        setTimeout(function() {
            var e = o.getBoundingClientRect()
              , e = "width"in e ? e.width : e.right - e.left;
            Math.round(e) < window.innerWidth - 10 && (o.style.width = window.innerWidth + "px",
            o.style.height = window.innerHeight + "px")
        }, 0));
        var o = document.createElement("iframe");
        e ? o.setAttribute("style", "border: hidden; width: 100%; height: 100%; ") : o.setAttribute("style", "border: hidden; position: relative; max-width: 100%; max-height: 100%; box-sizing: border-box;background:#fff "),
        o.setAttribute("id", "packeta-widget"),
        o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
        o.setAttribute("allow", "geolocation"),
        o.setAttribute("src", d),
        wrapper.appendChild(menu),
        menu.appendChild(nazev),
        menu.appendChild(button),
        button.appendChild(span),
        wrapper.appendChild(o),
        e || document.body.appendChild(wrapper),
        null === wrapper.getAttribute("tabindex") && wrapper.setAttribute("tabindex", "-1"),
        wrapper.setAttribute("class", "visible"),
        window.addEventListener("message", e => {
            e = e.data.parcelshop;
            document.getElementById("ship-to-different-address-checkbox").checked = !0,
            document.getElementById("packeta-point-id").value = e.detail.pclshopid + " - " + e.detail.name,
            document.getElementById("packeta-point-info").textContent = e.detail.name,
            document.getElementById("shipping_first_name").value = document.getElementById("billing_first_name").value,
            document.getElementById("shipping_last_name").value = document.getElementById("billing_last_name").value,
            document.getElementById("shipping_company").value = e.detail.pclshopid,
            document.getElementById("shipping_postcode").value = e.detail.zipcode,
            document.getElementById("shipping_address_1").value = e.detail.name,
            document.getElementById("shipping_address_2").value = e.detail.address,
            document.getElementById("shipping_city").value = e.detail.city,
            wrapper.setAttribute("style", "visibility: hidden"),
            wrapper.setAttribute("style", "visibility: hidden")
        }
        , !1),
        wrapper.addEventListener("keyup", function(e) {
            27 == e.keyCode && (wrapper.setAttribute("style", "visibility: hidden"),
            document.getElementById("packeta-point-info").textContent = "Zatím nevybráno")
        }),
        wrapper.focus()
    }
};
