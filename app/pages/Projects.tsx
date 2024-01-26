import React from 'react'
import Image from 'next/image';

/**
 * Projects page
 * Opti : create a component for project
 */
export default function Projects() {
    return (
        <>
            <div className="bg-red text-center py-16">
                {/** Title */}
                <h1 className="text-5xl text-white font-bold mb-4">PROJETS</h1>

                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <div className='w-full flex flex-col sm:flex-row flex-wrap'>

                    {/* Row 1 */}
                    <div className='w-full flex flex-col sm:flex-row'>
                        {/** Perfumist */}
                        <div className='w-full sm:w-1/2 bg-[#78262d]'>
                            <h2 className='text-3xl font-bold pt-20 mb-10'> Perfumist </h2>
                            <div className='w-full justify-center flex mb-5'>
                                <Image src="/perfumist.png" alt="Agrove Mobile Screen" width={270} height={300} objectFit="contain" />
                            </div>
                            <div>
                                <p>
                                    Refonte intégrale d&apos;une application mobile (1 000 000 d&apos;utilisateurs) pour Perfumist.
                                </p>
                            </div>

                            <h4 className='text-1xl font-bold mt-10 mb-5'> Stack </h4>
                            <div className='w-full justify-center flex'>
                                <Image src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/matomo-icon.svg" alt='matomo' width={70} height={70} className='m-5' />
                                <Image src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt='kotlin' width={50} height={50} className='m-5' />
                                <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt='figma' width={50} height={50} className='m-5' />
                            </div>
                        </div>
                        {/** Agrove V1*/}
                        <div className='w-full sm:w-1/2 bg-[#70CEA3]'>
                            <h2 className='text-3xl font-bold pt-20 mb-10 text-center'> Agrove V1 </h2>
                            <div className='w-full justify-center flex mb-5'>
                                <Image src="/agrove.png" alt="Agrove Mobile Screen" width={300} height={500} objectFit="contain" />
                            </div>
                            <div className='w-full flex justify-center'>
                                <p className='w-1/2 text-center mx-auto'>
                                    Maintenance et ajout de fonctionnalités sur l&apos;application mobile iOS Agrove. Application connectée à des capteurs IoT pour la mesure de données agronomiques tel que la température, l&apos;humidité, la luminosité, etc.
                                </p>
                            </div>

                            <h4 className='text-1xl font-bold mt-10 mb-5 text-center'> Stack </h4>
                            <div className='w-full justify-center flex'>
                                <Image src="https://www.vectorlogo.zone/logos/swift/swift-icon.svg" alt='matomo' width={50} height={50} className='m-5' />
                                <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt='kotlin' width={50} height={50} className='m-5' />
                                <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt='figma' width={50} height={50} className='m-5' />
                            </div>
                        </div>
                    </div>
                    
                    {/* Row 1 */}
                    <div className='w-full flex flex-col sm:flex-row'>
                    {/** Agrove V2*/}
                    <div className='w-full sm:w-1/2 bg-[#49BF85]'>
                        <h2 className='text-3xl font-bold pt-20 mb-10 text-center'> Agrove V2 </h2>
                        <div className='w-full justify-center flex mb-5'>
                            <Image src="/agrove.png" alt="Agrove Mobile Screen" width={300} height={500} objectFit="contain" />
                        </div>
                        <div className='w-full flex justify-center'>
                            <p className='w-1/2 text-center mx-auto'>
                                Refonte intégrale de l&apos;application mobile Agrove en React Native.
                            </p>
                        </div>

                        <h4 className='text-1xl font-bold mt-10 mb-5 text-center'> Stack </h4>
                        <div className='w-full justify-center flex'>
                            <Image src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt='react' width={50} height={50} className='m-5' />
                            <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt='firebase' width={50} height={50} className='m-5' />
                            <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt='figma' width={50} height={50} className='m-5' />
                        </div>
                    </div>

                    {/** Raquette padel*/}
                    <div className='w-full sm:w-1/2 bg-[#131921]'>
                        <h2 className='text-3xl font-bold pt-20 mb-10 text-center'> Raquette Padel </h2>
                        <div className='w-full justify-center flex mb-5'>
                            <Image src="/raquette-padel.png" alt="Agrove Mobile Screen" width={300} height={500} objectFit="contain" />
                        </div>
                        <div className='w-full flex justify-center'>
                            <p className='w-1/2 text-center mx-auto'>
                                Création d&apos;une application mobile b to b pour commander du matériel de padel et consulter les stocks.
                                Application hybrid et connectée a une api Prestashop et un backend firebase.
                            </p>
                        </div>

                        <h4 className='text-1xl font-bold mt-10 mb-5 text-center'> Stack </h4>
                        <div className='w-full justify-center flex'>
                            <Image src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt='flutter' width={50} height={50} className='m-5' />
                            <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt='firebase' width={50} height={50} className='m-5' />
                            <Image src="https://brandeps.com/logo-download/P/PrestaShop-logo-vector-01.svg" alt='prestashop' width={50} height={50} className='m-5' />
                            <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt='figma' width={50} height={50} className='m-5' />

                        </div>
                    </div>
                </div>
                </div>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            </div>
        </>
    )
}
