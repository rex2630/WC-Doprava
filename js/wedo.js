var wrapper;
function closeAA() {
    wrapper.setAttribute("style", "visibility:hidden;display:none");
}
Packetaaaa = window.Packetaaaa || {}, Packetaaaa.Viewport = {
    element: null, originalValue: null, set: function () {
        Packetaaaa.Viewport.element || (Packetaaaa.Viewport.element = document.querySelector("meta[name=viewport]"),
        Packetaaaa.Viewport.element ? Packetaaaa.Viewport.originalValue = Packetaaaa.Viewport.element.getAttribute("content") : (Packetaaaa.Viewport.originalValue = "user-scalable=yes",
        Packetaaaa.Viewport.element = document.createElement("meta"),
        Packetaaaa.Viewport.element.setAttribute("name", "viewport"), (document.head || document.getElementsByTagName("head")[0]).appendChild(Packeta.Viewport.element))),
        Packetaaaa.Viewport.element.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes");
    },
    restore: function () {
        null !== Packetaaaa.Viewport.originalValue && Packetaaaa.Viewport.element.setAttribute("content", Packetaaaa.Viewport.originalValue);
    }
},

    Packetaaaa.Widget = {
        baseUrl: "https://widget.wedo.cz/v5/widget-content",

        close: function () { },

        pick: function (e, t, a, i, n) {
            Packetaaaa.Widget.close(),

            void 0 === i && (i = {}),
            "version" in i || (i.version = 3),
            i.apiKey = e, i.usePreProdWidgetVersion = !0;

            var o = Packetaaaa.Widget.baseUrl, 
                o = "yes" === e && "no" === t ? "https://widget.wedo.cz/v5/widget-content?fixedType=Point" : "no" === e && "yes" === t ? "https://widget.wedo.cz/v5/widget-content?fixedType=Box" : "https://widget.wedo.cz/v5/widget-content", 
                t = null != n; 
                t ? wrapper = n : (Packetaaaa.Viewport.set(),

                menu = document.createElement("div"),
                menu.setAttribute("class", "menu"),
                menu.setAttribute("style", "background: rgb(41, 40, 41);color: #fff;font-weight: 700;padding: 0 0 0 1rem;height: 40px;font-size: 22px;width: 100%;"),
                nazev = document.createElement("span"), nazev.classList.add("ui-dialog-title"),
                nazev.textContent = "Vyberte výdejní místo WE|DO",
                button = document.createElement("button"),

                button.setAttribute("type", "button"),
                button.setAttribute("title", "Zavřít"),
                button.setAttribute("onclick", "closeAA()"),
                button.setAttribute("style", "float:right;background:0;display:flex;padding: 0;"),

                span = document.createElement("span"),
                span.textContent = "X",

                span.setAttribute("style", "background:#4cb45a;color:rgb(41, 40, 41);width:40px;height:40px;border-radius:6px"),
                span.setAttribute("onMouseOver", "this.style.backgroundColor='#22d760',this.style.color='#000'"),
                span.setAttribute("onMouseOut", "this.style.backgroundColor='#4cb45a'"), (wrapper = document.createElement("div")).setAttribute("style", "z-index: 999999; position: fixed; -webkit-backface-visibility: hidden; left: 0;top:0; width: 100%;display:flex;flex-direction: column;align-items: center; height: 100%; background: " + (i.overlayColor || "rgba(0, 0, 0, 0.3)") + "; "),

                wrapper.addEventListener("click", function () {
                    Packetaaaa.Widget.close();
                }),

                setTimeout(function () {
                    var e = d.getBoundingClientRect(), e = "width" in e ? e.width : e.right - e.left; Math.round(e) < window.innerWidth - 10 && (d.style.width = window.innerWidth + "px", d.style.height = window.innerHeight + "px");
                }, 0));

            var d = document.createElement("iframe"); t ? d.setAttribute("style", "border: hidden; width: 100%; height: 100%; ") : d.setAttribute("style", "border: hidden; position: relative; max-width: 100%; max-height: 100%; box-sizing: border-box;background:#fff "),
                d.setAttribute("id", "packeta-widget"),
                d.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
                d.setAttribute("allow", "geolocation"),
                d.setAttribute("src", o),

                wrapper.appendChild(menu),
                menu.appendChild(nazev),
                menu.appendChild(button),
                button.appendChild(span),
                wrapper.appendChild(d), t || document.body.appendChild(wrapper),

                null === wrapper.getAttribute("tabindex") && wrapper.setAttribute("tabindex", "-1"),

                wrapper.setAttribute("class", "visible"),

                window.addEventListener("message", e => {
                    document.getElementById("packeta-point-id").value = e.data.selectedID + " - " + e.data.selectedName,
                    document.getElementById("packeta-point-info").textContent = e.data.selectedName,
                    document.getElementById("ship-to-different-address-checkbox").checked = !0,
                    document.getElementById("shipping_first_name").value = document.getElementById("billing_first_name").value,
                    document.getElementById("shipping_last_name").value = document.getElementById("billing_last_name").value,
                    document.getElementById("shipping_company").value = e.data.selectedID,
                    document.getElementById("shipping_address_1").value = e.data.selectedName,
                    document.getElementById("shipping_address_2").value = "", document.getElementById("shipping_postcode").value = "000 00",
                    document.getElementById("shipping_city").value = "---", wrapper.setAttribute("style", "visibility: hidden");
                }, !1),

                wrapper.addEventListener("keyup", function (e) {
                    27 == e.keyCode && (wrapper.setAttribute("style", "visibility: hidden"),

                    document.getElementById("packeta-point-info").textContent = "Zatím nevybráno");
                }), wrapper.focus();
        }};
