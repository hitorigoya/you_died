const you_died = () => {
    const yd_bg = document.createElement("div")
    yd_bg.classList.add("yd_bg_f9015ca3")
    const yd_text = document.createElement("div")
    yd_text.classList.add("yd_text_f9015ca3")
    yd_text.textContent = "YOU DIED"

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(".yd_bg_f9015ca3{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);height:16vh;width:100%;opacity:0;background-image:linear-gradient(0deg, transparent 0%, rgb(0, 0, 0, 0.7) 20%, rgb(0, 0, 0, 0.7) 80%, transparent 100%);animation-name:ydied_bg_f9015ca3;animation-duration:5s}@media (min-width: 780px){.yd_bg_f9015ca3{height:22vh}}@keyframes ydied_bg_f9015ca3{from{opacity:0}16%{opacity:1}86%{opacity:1}to{opacity:0}}.yd_text_f9015ca3{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;padding:32px;font-family:serif;letter-spacing:-2px;color:#73060F;animation-duration:5s;animation-name:ydied_text_f9015ca3;opacity:0}@keyframes ydied_text_f9015ca3{from{font-size:6vw;opacity:0}56%{opacity:1}86%{opacity:1}to{font-size:7vw;opacity:0}}");
    document.adoptedStyleSheets = [sheet];
    document.body.append(yd_bg, yd_text)
    setTimeout(() => {
        yd_bg.remove()
        yd_text.remove()
    }, 5100)
}