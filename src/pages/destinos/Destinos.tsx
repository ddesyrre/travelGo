import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export function destinos() {


    const data = [
        {
            label: "África",
            value: "africa",
            images: [
                {
                    imageLink:
                        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    imageLink:
                        "https://content.r9cdn.net/rimg/dimg/c6/b2/7e865843-city-26243-164a4a25d83.jpg?width=1366&height=768&xhint=3968&yhint=1450&crop=true",
                },
                {
                    imageLink:
                        "https://cdn.britannica.com/16/152516-050-93DB4049/Goree-Island-Senegal.jpg",
                },
                {
                    imageLink:
                        "https://images.impresa.pt/expresso/2017-06-23-luanda-1/16x9",
                },
                {
                    imageLink:
                        "https://media.timeout.com/images/105237782/750/422/image.jpg",
                },
                {
                    imageLink:
                        "https://cdn.britannica.com/16/177616-050-0167E767/Casablanca-Morocco.jpg",
                },
            ],
        },
        {
            label: "Américas",
            value: "americas",
            images: [
                {
                    imageLink:
                        "https://www.zapimoveis.com.br/blog/wp-content/uploads/2023/12/tudo-sobre-avenida-paulista.jpg",
                },
                {
                    imageLink:
                        "https://images.squarespace-cdn.com/content/v1/55b7e44de4b0af4724ac5dd6/1607447472992-AB81GBZ7ZFG3T9MXVKOP/machu-picchu-peru.jpg",
                },
                {
                    imageLink:
                        "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1705582644/mkiosll4innhftkz2hie.jpg",
                },
                {
                    imageLink:
                        "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg",
                },
                {
                    imageLink:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0F35FED-5HFsT_UigF8u21qQ5BRK48eUpg&s",
                },
                {
                    imageLink:
                        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/147000/147900-Toronto.jpg",
                },
            ],
        },
        {
            label: "Ásia",
            value: "asia",
            images: [
                {
                    imageLink:
                    "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg ",
                },
                {
                    imageLink:
                    "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt3f1dd78cb088d203/61d6b8af0d4d1813c7f45eb5/US_Mumbai_IN_Header.jpg ",
                },
                {
                    imageLink:
                    "https://www.voltaaomundo.pt/files/2018/07/shutterstock_291252509.jpg ",
                },
                {
                    imageLink:
                    "https://blog.apl.eng.br/wp-content/uploads/2019/02/277238-jacarta-e-xangai-podem-desaparecer-do-mapa-entenda-porque-elas-estao-afundando.jpg",
                },
                {
                    imageLink:
                    "https://www.brusselsairlines.com/aircore/cache/images/64492/eyJpZGVudGlmaWVyIjoxMTc3NywidHlwZSI6ImFzc2V0In0=.webp",
                },
                {
                    imageLink:
                    "https://ilhasmaldivas.com.br/wp-content/uploads/2021/10/ilhas-maldivas-galeria-vakkaru-resort-02.jpg ",
                },
            ],
        },
        {
            label: "Europa",
            value: "europa",
            images: [
                {
                    imageLink:
                    "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide.jpg?imwidth=680 ",
                },
                {
                    imageLink:
                    "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg ",
                },
                {
                    imageLink:
                    "https://lp-cms-production.imgix.net/2023-03/GettyRF_473481530.jpg ",
                },
                {
                    imageLink:
                    "https://content.r9cdn.net/rimg/dimg/63/e1/a2a99d53-city-14057-54e213d9.jpg?width=1366&height=768&xhint=1432&yhint=877&crop=true ",
                },
                {
                    imageLink:
                    "https://destinosnotaveis.com.br/wp-content/uploads/2016/08/Canal-Amsterdam-Holanda-1024x640.jpg ",
                },
                {
                    imageLink:
                    "https://i.natgeofe.com/n/6f896103-f5b8-426b-aef7-3dcbbee6dcf4/GettyImages1045586638.jpg ",
                },
            ],
        },
        {
            label: "Oceania",
            value: "oceania",
            images: [
                {
                    imageLink:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ca/8b/89/yawini-beach.jpg?w=700&h=-1&s=1 ",
                },
                {
                    imageLink:
                    "https://digital.ihg.com/is/image/ihg/intercontinental-bora-bora-5255821599-16x9? ",
                },
                {
                    imageLink:
                    "https://oceanhunter.com/images/rock/rock-islands-close-up.jpg ",
                },
                {
                    imageLink:
                    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475032-Queenstown-And-Vicinity.jpg ",
                },
                {
                    imageLink:
                    "https://i0.statig.com.br/bancodeimagens/0u/sq/hp/0usqhposec8q2dt49j9blebn1.jpg ",
                },
                {
                    imageLink:
                    "https://content.r9cdn.net/rimg/dimg/85/4b/7706fa93-city-47390-16911fe40e6.jpg?crop=true&width=1366&height=768&xhint=2398&yhint=1724 ",
                },
            ],
        },
    ];

    return (
        <Tabs value="html">
            <TabsHeader className="py-8">
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className="grid grid-cols-1 gap-4 ">
                {data.map(({ value, images }) => (
                    <TabPanel
                        className="grid grid-cols-2 gap-4 md:grid-cols-3"
                        key={value}
                        value={value}
                    >
                        {images?.map(({ imageLink }, index) => (
                            <div key={index}>
                                <img
                                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                                    src={imageLink}
                                    alt="image-photo"
                                />
                            </div>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}

export default destinos;