
function gaInit() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-JZ70P6VEZZ');
    console.log('ga Init called')
}


function gaEvent() {
    gtag('event', 'visit');
}


// main
gaInit()
