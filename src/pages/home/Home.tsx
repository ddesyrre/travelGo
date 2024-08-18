function Home() {
    return (
        <>

            <div className="py-8 space-y-4">
                <figure className="relative h-96 w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src="https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="bed with pillows"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>
                            <div className="text-xl uppercase font-bold text-left" >
                                Airbnb ou hotel?
                            </div>
                            <div className="mt-2 font-normal">
                                Entenda qual opção funciona melhor para o seu estilo de viagem
                            </div>
                        </div>
                    </figcaption>
                </figure>

                <figure className="relative h-96 w-full ">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="cruise"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>
                            <div className="text-xl uppercase font-bold text-left" >
                                Vale a pena viajar de cruzeiro?
                            </div>
                            <div className="mt-2 font-normal">
                                Dica: você não precisa ser fã do Roberto Carlos ou Neymar para aproveitar a viagem
                            </div>
                        </div>
                    </figcaption>
                </figure>


                <figure className="relative h-96 w-full ">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src="https://plus.unsplash.com/premium_photo-1669638749054-da4b61430282?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="road trip"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>
                            <div className="text-xl uppercase font-bold text-left" >
                                Viagem de carro
                            </div>
                            <div className="mt-2 font-normal">
                                Não deixe a falta de planejamento ser um estepe no caminho
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </>
    );
}


export default Home;