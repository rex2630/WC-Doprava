var wrapper;
function closeA() {
    wrapper.setAttribute("style", "visibility:hidden;display: none;")
}
Packetaa = window.Packetaa || {},
Packetaa.Viewport = {
    element: null,
    originalValue: null,
    set: function() {
        Packetaa.Viewport.element || (Packetaa.Viewport.element = document.querySelector("meta[name=viewport]"),
        Packetaa.Viewport.element ? Packetaa.Viewport.originalValue = Packetaa.Viewport.element.getAttribute("content") : (Packetaa.Viewport.originalValue = "user-scalable=yes",
        Packetaa.Viewport.element = document.createElement("meta"),
        Packetaa.Viewport.element.setAttribute("name", "viewport"),
        (document.head || document.getElementsByTagName("head")[0]).appendChild(Packeta.Viewport.element))),
        Packetaa.Viewport.element.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes")
    },
    restore: function() {
        null !== Packetaa.Viewport.originalValue && Packetaa.Viewport.element.setAttribute("content", Packetaa.Viewport.originalValue)
    }
},
Packetaa.Widget = {
    baseUrl: "https://b2c.cpost.cz/locations/",
    close: function() {},
    pick: function(e, t, a, n, i) {
        Packetaa.Widget.close(),
        void 0 === n && (n = {}),
        "version"in n || (n.version = 3),
        n.apiKey = e,
        n.usePreProdWidgetVersion = !0;
        var o = Packetaa.Widget.baseUrl
          , o = "yes" === e && "no" === t ? "https://b2c.cpost.cz/locations/?type=POST_OFFICE" : "no" === e && "yes" === t ? "https://b2c.cpost.cz/locations/?type=BALIKOVNY" : "https://b2c.cpost.cz/locations/"
          , t = null != i;
        t ? wrapper = i : (Packetaa.Viewport.set(),
        menu = document.createElement("div"),
        menu.setAttribute("class", "menu"),
        menu.setAttribute("style", "background: #fff;color: rgb(0,39,118);font-weight: 700;padding: 0 0 0 1rem;height: 40px;font-size: 22px;width: 100%;"),
        nazev = document.createElement("span"),
        nazev.classList.add("ui-dialog-title"),
        nazev.textContent = "Vyberte výdejní místo pošty",
        button = document.createElement("button"),
        button.setAttribute("type", "button"),
        button.setAttribute("title", "Zavřít"),
        button.setAttribute("onclick", "closeA()"),
        button.setAttribute("style", "float:right;background:0;display:flex;padding: 0;"),
        span = document.createElement("span"),
        span.textContent = "X",
        span.setAttribute("style", "background:rgb(0,39,118);color:#fff;width:40px;height:40px;"),
        (wrapper = document.createElement("div")).setAttribute("style", "z-index: 999999; position: fixed; -webkit-backface-visibility: hidden; left: 0;top:0; width: 100%;display:flex;flex-direction: column;align-items: center; height: 100%; background: " + (n.overlayColor || "rgba(0, 0, 0, 0.3)") + "; "),
        wrapper.addEventListener("click", function() {
            Packetaa.Widget.close()
        }),
        setTimeout(function() {
            var e = d.getBoundingClientRect()
              , e = "width"in e ? e.width : e.right - e.left;
            Math.round(e) < window.innerWidth - 10 && (d.style.width = window.innerWidth + "px",
            d.style.height = window.innerHeight + "px")
        }, 0));
        var d = document.createElement("iframe");
        t ? d.setAttribute("style", "border: hidden; width: 100%; height: 100%; ") : d.setAttribute("style", "border: hidden; position: relative; max-width: 100%; max-height: 100%; padding:  0 5px 10px 5px; box-sizing: border-box;background:#fff "),
        d.setAttribute("id", "packeta-widget"),
        d.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
        d.setAttribute("allow", "geolocation"),
        d.setAttribute("src", o),
        wrapper.appendChild(menu),
        menu.appendChild(nazev),
        menu.appendChild(button),
        button.appendChild(span),
        wrapper.appendChild(d),
        t || document.body.appendChild(wrapper),
        null === wrapper.getAttribute("tabindex") && wrapper.setAttribute("tabindex", "-1"),
        window.addEventListener("message", function(e) {
            var t, a;
            "pickerResult" === e.data.message && (document.getElementById("ship-to-different-address-checkbox").checked = !0,
            t = document.getElementById("shipping_address_1"),
            a = e.data.point.address.split(","),
            "BALIKOVNY" === e.data.point.type ? "PARTNER" === e.data.point.subtype ? (document.getElementById("packeta-point-id").value = "Balíkomat - " + e.data.point.address,
            document.getElementById("shipping_company").value = "Balíkomat - " + e.data.point.name) : (document.getElementById("packeta-point-id").value = "Balíkomat na poště - " + e.data.point.address,
            document.getElementById("shipping_company").value = "Balíkomat na poště - " + e.data.point.name) : (document.getElementById("packeta-point-id").value = "Pošta - " + e.data.point.address,
            document.getElementById("shipping_company").value = "Pošta - " + e.data.point.name),
            document.getElementById("shipping_first_name").value = document.getElementById("billing_first_name").value,
            document.getElementById("shipping_last_name").value = document.getElementById("billing_last_name").value,
            t.value = a[0],
            document.getElementById("shipping_postcode").value = e.data.point.zip,
            e.data.point.municipality_district_name != e.data.point.municipality_name && (document.getElementById("shipping_address_2").value = e.data.point.municipality_district_name),
            document.getElementById("shipping_address_2").value = e.data.point.municipality_district_name,
            document.getElementById("shipping_city").value = e.data.point.municipality_name,
            document.getElementById("packeta-point-info").textContent = e.data.point.address,
            wrapper.setAttribute("style", "visibility: hidden"),
            wrapper.setAttribute("style", "height: 0"))
        }),
        wrapper.addEventListener("keyup", function(e) {
            27 == e.keyCode && (wrapper.setAttribute("style", "visibility: hidden"),
            document.getElementById("packeta-point-info").textContent = "Zatím nevybráno")
        }),
        wrapper.focus()
    }
};
