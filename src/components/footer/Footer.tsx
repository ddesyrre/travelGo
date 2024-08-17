import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    return (
        <>
            <div className="flex justify-center rounded-xl  bg-blue text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        travelGo ©
                    </p>

                    <p className="text-md py-2">Acesse:</p>
                    <div className="flex gap-2">
                        <a href="https://github.com/ddesyrre/" target="_blank">
                            <div>
                                <GithubLogo size={48} weight="light" />
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/desyrre/" target="_blank">
                            <div>
                                <LinkedinLogo size={48} weight="light" />
                            </div>
                        </a>

                        <a href="https://instagram.com/3treslimoes/" target="_blank">
                            <div>
                                <InstagramLogo size={48} weight="light" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;



