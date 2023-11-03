import React from "react";
import LogoAcensi from '../public/LogoAcensi.png'
import LogoBrandSilver from '../public/LogoBrandSilver.png'
import LogoBrocloud from '../public/LogoBrocloud.png'
import LogoCelad from '../public/LogoCelad.png'
import LogoCreditAgricole from '../public/LogoCreditAgricole.png'
import LogoDayOne from '../public/LogoDayOne.png'
import LogoEngit from '../public/LogoEngit.png'
import LogoGoogle from '../public/LogoGoogle.png'
import LogoJeVeuxAider from '../public/LogoJeVeuxAider.png'
import LogoKolabee from '../public/LogoKolabee.png'
import LogoLabsoft from '../public/LogoLabsoft.png'
import LogoMeritis from '../public/LogoMeritis.png'
import LogoMicrosoft from '../public/LogoMicrosoft.png'
import LogoSII from '../public/LogoSII.png'
import LogoTMCFrance from '../public/LogoTMCFrance.png'
import LogoVendredi from '../public/LogoVendredi.png'
import LogoWebAtrio from '../public/LogoWebAtrio.png'
import LogoWebnet from '../public/LogoWebnet.png'
import LogoYamark from '../public/LogoYamark.png'
import Image from "next/image";

const Slider = () => {
    return (
        <div className="slider">
            <div className="slide-track gap-16 md:gap-16 lg:gap-52">
                <Image src={LogoAcensi} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoBrandSilver} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoBrocloud} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoCelad} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoCreditAgricole} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoDayOne} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoEngit} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoGoogle} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoJeVeuxAider} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoKolabee} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoLabsoft} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoMeritis} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoMicrosoft} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoSII} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoTMCFrance} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoVendredi} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoWebAtrio} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoWebnet} alt="Logo de Laravel" width={50} className="slide"/>
                <Image src={LogoYamark} alt="Logo de Laravel" width={50} className="slide"/>
            </div>
        </div>
    );
};

export default Slider;
