Packeta = window.Packeta || {},
Packeta.Viewport = {
    element: null,
    originalValue: null,
    set: function() {
        Packeta.Viewport.element || (Packeta.Viewport.element = document.querySelector("meta[name=viewport]"),
        Packeta.Viewport.element ? Packeta.Viewport.originalValue = Packeta.Viewport.element.getAttribute("content") : (Packeta.Viewport.originalValue = "user-scalable=yes",
        Packeta.Viewport.element = document.createElement("meta"),
        Packeta.Viewport.element.setAttribute("name", "viewport"),
        (document.head || document.getElementsByTagName("head")[0]).appendChild(Packeta.Viewport.element))),
        Packeta.Viewport.element.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes")
    },
    restore: function() {
        null !== Packeta.Viewport.originalValue && Packeta.Viewport.element.setAttribute("content", Packeta.Viewport.originalValue)
    }
},
Packeta.Widget = {
    baseUrl: "https://api.dpd.cz/widget/latest/index.html",
    close: function() {},
    pick: function(e, t, i, n) {
        Packeta.Widget.close(),
        void 0 === i && (i = {}),
        "version"in i || (i.version = 3),
        i.apiKey = e,
        i.usePreProdWidgetVersion = !0;
        var a = Packeta.Widget.baseUrl;
        "no" === i.apiKey && (a = "https://api.dpd.cz/widget/latest/index.html?disableLockers=true");
        var d, e = null != n;
        e ? d = n : (Packeta.Viewport.set(),
        (d = document.createElement("div")).setAttribute("style", "z-index: 999999; position: fixed; -webkit-backface-visibility: hidden; left: 0; top: 0; width: 100%; height: 100%; background: " + (i.overlayColor || "rgba(0, 0, 0, 0.3)") + "; "),
        d.addEventListener("click", function() {
            Packeta.Widget.close()
        }),
        setTimeout(function() {
            var e = o.getBoundingClientRect()
              , e = "width"in e ? e.width : e.right - e.left;
            Math.round(e) < window.innerWidth - 10 && (o.style.width = window.innerWidth + "px",
            o.style.height = window.innerHeight + "px")
        }, 0));
        var o = document.createElement("iframe");
        e ? o.setAttribute("style", "border: hidden; width: 100%; height: 100%; ") : o.setAttribute("style", "border: hidden; position: absolute; left: 0; top: 0; width: 100%; height: 100%; padding: 10px 5px; box-sizing: border-box;background:#fff "),
        o.setAttribute("id", "packeta-widget"),
        o.setAttribute("sandbox", "allow-scripts allow-same-origin"),
        o.setAttribute("allow", "geolocation"),
        o.setAttribute("src", a),
        d.appendChild(o),
        e || document.body.appendChild(d),
        null === d.getAttribute("tabindex") && d.setAttribute("tabindex", "-1"),
        d.setAttribute("class", "visible"),
        window.addEventListener("message", e => {
            e.data.dpdWidget && "widgetClose" === e.data.dpdWidget.message && (d.setAttribute("style", "visibility: hidden"),
            document.getElementById("packeta-point-id").value = "",
            document.getElementById("packeta-point-info").textContent = "Zatím nevybráno")
        }
        , !1),
        window.addEventListener("message", e => {
            e.data.dpdWidget && (document.getElementById("packeta-point-id").value = e.data.dpdWidget.pickupPointResult,
            document.getElementById("packeta-point-info").textContent = e.data.dpdWidget.contactInfo.name,
            document.getElementById("ship-to-different-address-checkbox").checked = !0,
            document.getElementById("shipping_first_name").value = document.getElementById("billing_first_name").value,
            document.getElementById("shipping_last_name").value = document.getElementById("billing_last_name").value,
            document.getElementById("shipping_company").value = e.data.dpdWidget.id,
            document.getElementById("shipping_postcode").value = e.data.dpdWidget.location.address.zip,
            document.getElementById("shipping_address_1").value = e.data.dpdWidget.contactInfo.name,
            document.getElementById("shipping_address_2").value = e.data.dpdWidget.location.address.street,
            document.getElementById("shipping_city").value = e.data.dpdWidget.location.address.city,
            d.setAttribute("style", "visibility: hidden"))
        }
        , !1),
        d.addEventListener("keyup", function(e) {
            27 == e.keyCode && (d.setAttribute("style", "visibility: hidden"),
            document.getElementById("packeta-point-info").textContent = "Zatím nevybráno")
        }),
        d.focus()
    }
};
