'use client';

import Navbar from "../nav/Navbar";
import { font_bold, font_med } from "@/app/fonts";
import Image from "next/image";

import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../Button";

const MainPage = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="lg:left-52 md:left-20 md:top-5 top-0 fixed">
                <Navbar />
            </div>
            <div className="md:w-3/5 w-full min-h-screen md:border-x md:border-newgray">
                {/* ABOUT SECTION */}

                <section
                    id="about"
                    className="flex flex-col md:pt-5 pt-16 min-h-screen"
                >
                    <div id="about-marker" className="h-1 w-full" />
                    <div className="md:pl-10 pl-8 pr-8 md:pr-0">
                        <div className="md:size-22 size-16 rounded-full bg-[url('/images/pfp_new.svg')] bg-cover">
                        </div>
                        <div className={`md:text-2xl text-xl pt-5 ${font_med.className}`}>
                            Sadie Lee
                        </div>
                        <div className="text-lg">
                            Research Student, Mayo Clinic Platform
                        </div>
                        <div className="text-lg -mt-1">
                            B.A., University of British Columbia
                        </div>
                        <div className="flex flex-row gap-3 pt-8 items-center">
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="mailto:leesadie025@gmail.com"
                                className="hover:opacity-50 transition duration-200"
                            >
                                <TfiEmail size={24}/>
                            </a>
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://github.com/leesadie"
                                className="hover:opacity-50 transition duration-200"
                            >
                                <VscGithub size={24}/>
                            </a>
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://www.linkedin.com/in/leesadie/"
                                className="hover:opacity-50 transition duration-200"
                            >
                                <FaLinkedinIn size={24}/>
                            </a>
                        </div>
                        <div className="pt-2">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/files/Sadie_Lee_Resume.pdf"
                                className="underline underline-offset-2 hover:opacity-50 transition duration-200"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                    <hr className="mt-10 text-newgray mx-8 md:mx-0"/>
                    <div className="md:pl-10 pl-8 pr-8 md:pr-0 md:pt-10 pt-8">
                        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:pr-16 flex flex-col">
                            <div className={`col-start-1 md:text-2xl text-xl ${font_med.className}`}>
                                Currently
                            </div>
                            <div className="flex flex-col col-start-2 col-span-2">
                                <div className="text-base/6 pt-1">
                                    I study cognitive science & data science at the University of British Columbia, graduating May 2026. 
                                </div>
                                <div className="pt-4">
                                    <p className="text-base/6">
                                        Currently, I am a research student at 
                                        <span className={`text-accent hover:opacity-70 cursor-pointer transition duration-200 ${font_bold.className}`}>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.mayoclinicplatform.org/" className="pl-1">
                                                Mayo Clinic Platform
                                            </a>
                                        </span>,
                                        working to understand patient privacy risks from AI models trained on de-identified medical images.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <p className="text-base/6 pr-10">
                                        I'm also working at 
                                        <span className={`text-accent hover:opacity-70 cursor-pointer transition duration-200 ${font_bold.className}`}>
                                            <a target="_blank" rel="noopener noreferrer" href="https://voythos.io/" className="pl-1">
                                                Voythos
                                            </a>
                                        </span>,
                                        an early-stage startup, where I'm building a medical image processing and modeling pipeline to predict trajectories for patients with complex cardiovascular diseases.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:pl-10 pl-8 pr-8 md:pr-0 md:pt-10 pt-8">
                        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:pr-16 flex flex-col">
                            <div className={`col-start-1 md:text-2xl text-xl ${font_med.className}`}>
                                Previously
                            </div>
                            <div className="flex flex-col col-start-2 col-span-2">
                                <div className="pt-1">
                                    <p className="text-base/6">
                                        I’ve previously been an intern at Mayo Clinic Platform, and a research assistant at
                                        <span className={`text-accent hover:opacity-70 cursor-pointer transition duration-200 ${font_bold.className}`}>
                                            <a target="_blank" rel="noopener noreferrer" href="https://bcchr.ca/dhil" className="pl-1">
                                                BC Children's Hospital Research Institute
                                            </a>
                                        </span>.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <p className="text-base/6 pr-8">
                                        My other work includes software development at 
                                        <span className={`text-accent hover:opacity-70 cursor-pointer transition duration-200 ${font_bold.className}`}>
                                            <a target="_blank" rel="noopener noreferrer" href="https://eml.ubc.ca/" className="pl-1">
                                                UBC Emerging Media Lab
                                            </a>
                                        </span>,
                                        deep learning research at
                                        <span className={`text-accent hover:opacity-70 cursor-pointer transition duration-200 ${font_bold.className}`}>
                                            <a target="_blank" rel="noopener noreferrer" href="https://ubcmint.github.io/" className="pl-1">
                                                UBC MINT
                                            </a>
                                        </span>,
                                        and data science consulting at 
                                        <span className={`text-accent hover:opacity-70 cursor-pointer transition duration-200 ${font_bold.className}`}>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.ubc180dc.org/" className="pl-1">
                                                180 Degrees Consulting
                                            </a>
                                        </span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-10 text-newgray mx-8 md:mx-0"/>
                    <div className="md:pl-10 pl-8 pr-8 md:pr-0 md:pt-10 pt-8">
                        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:pr-16 flex flex-col">
                            <div className={`col-start-1 md:text-2xl text-xl ${font_med.className}`}>
                                Interests
                            </div>
                            <div className="flex flex-col col-start-2 col-span-2 text-base">
                                <div className="pt-1">
                                    AI/ML for human health
                                </div>
                                <div className="pt-1">
                                    AI/ML privacy and safety
                                </div>
                                <div className="pt-1">
                                    Medical image computing
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-10 text-newgray mx-8 md:mx-0"/>
                </section>

                {/* WORK SECTION */}
                <section
                    id="work"
                    className="flex flex-col min-h-screen md:pt-5 scroll-mt-12"
                >
                    <div id="work-marker" className="h-1 w-full" />
                    <div className="md:pl-10 pl-8 pr-8 md:pr-0 md:pt-10 pt-8">
                        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:pr-16 flex flex-col">
                            <div className={`flex flex-col col-start-1 md:text-2xl text-xl ${font_med.className}`}>
                                <div className="hidden md:block">
                                    Selected
                                </div>
                                <div className="hidden md:block">
                                    Work
                                </div>
                                <div className="md:hidden">
                                    Selected Work
                                </div>
                            </div>
                            <div className="flex flex-col col-start-2 col-span-2">
                                {/* VOYTHOS */}
                                <div className="">
                                    <div className={`md:text-lg text-base pt-4 md:pt-0 ${font_med.className}`}>
                                        Voythos Image Processing & Modeling
                                    </div>
                                    <div className="pt-4">
                                        <Image 
                                            src='/images/chest_ct.svg'
                                            alt="Voythos"
                                            height={500}
                                            width={500}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div className="pt-4 text-base/6">
                                        I’m currently working with Voythos to extract clinically relevant features from CT images for use in predicting patient trajectories. 
                                    </div>
                                    <div className="pt-6 text-base/6">
                                        I am directly involved with image processing and modeling, as well as in writing unit tests and designing the pipeline from feature extraction to trajectory prediction.  
                                    </div>
                                </div>

                                {/* MCP */}
                                <div className="md:pt-10 pt-8">
                                    <div className={`md:text-lg text-base ${font_med.className}`}>
                                        Mayo Clinic Platform_Accelerate Imaging
                                    </div>
                                    <div className="pt-4">
                                        <Image 
                                            src='/images/accelerate.svg'
                                            alt="Mayo Clinic Platform"
                                            height={500}
                                            width={500}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div className="pt-4 text-base/6">
                                        As an intern at MCP in 2024, I developed an end-to-end medical imaging for AI/ML workflow, helping MCP_Accelerate expand their capabilities to provide medical image datasets.
                                    </div>
                                    <div className="pt-6 text-base/6">
                                        MCP_Accelerate supports health-tech startups in becoming market ready, in part by offering access to de-identified datasets.  
                                    </div>
                                </div>

                                {/* BCCHR */}
                                <div className="md:pt-10 pt-8">
                                    <div className={`md:text-lg text-base ${font_med.className}`}>
                                        BCCHR Time in Range Data
                                    </div>
                                    <div className="pt-4">
                                        <Image 
                                            src='/images/bcchr.svg'
                                            alt="BCCHR Time in Range"
                                            height={500}
                                            width={500}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div className="pt-4 text-base/6">
                                        <p>
                                            As a research assistant, I led time in range data collection and analysis for the
                                            <span className='underline underline-offset-4 hover:opacity-50 transition duration-200 cursor-pointer'>
                                                <a target="_blank" rel="noopener noreferrer" href="https://tangdiabeteslab.com/portfolio-details-t1d-nexgen.php" className="px-1">
                                                    T1D REACHOUT
                                                </a>
                                            </span>
                                            study, and wrote scripts in R to facilitate data analysis.
                                        </p> 
                                    </div>
                                    <div className="pt-6 text-base/6">
                                        T1D REACHOUT is a study investigating the effects of peer support via mobile app on diabetes distress in adults with type 1 diabetes, with time in range as a secondary outcome.
                                    </div>
                                    <div className="pt-4">
                                        <Button href="https://github.com/leesadie/REACHOUT_TIR_Collection" text="Code" external/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RESEARCH SECTION */}
                        <div className="md:pt-10 pt-8">
                            <div className="md:grid md:grid-cols-3 md:gap-x-8 md:pr-16 flex flex-col">
                                <div className={`flex flex-col col-start-1 md:text-2xl text-xl ${font_med.className}`}>
                                    Research
                                </div>
                                <div className="flex flex-col col-start-2 col-span-2 pt-4 md:pt-0">
                                    <div className="text-base/6">
                                        Design and Implementation of a Mobile App to Deliver Peer Support to Adults with T1D: Operational Feasibility Study
                                    </div>
                                    <div className="pt-2 text-graysubtitle text-sm md:text-base">
                                        In Progress
                                    </div>
                                    <div className="text-graysubtitle text-sm md:text-base">
                                        Sadie Lee, Baray Sidhu, Parteek Johal, Ayman Azhar, Jonath Sujan, Matthias Görges, Tricia S. Tang
                                    </div>
                                    <div className="text-base/6 pt-4">
                                        Formalizing Ethical Design in Prostate Cancer Image Analysis: A Preliminary Case Study
                                    </div>
                                    <div className="pt-2 text-graysubtitle text-sm md:text-base">
                                        October 2024 • IEEE URTC
                                    </div>
                                    <div className="text-graysubtitle text-sm md:text-base">
                                        Sadie Lee, Adam Resnick, Nasibeh Zanjirani Farahani
                                    </div>
                                    <div className="pt-2">
                                        <Button href="https://ieeexplore.ieee.org/document/10937534" text="PDF" external/>
                                    </div>
                                    <div className="text-base/6 pt-4">
                                        Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                                    </div>
                                    <div className="pt-2 text-graysubtitle text-sm md:text-base">
                                        February 2024 • AAAI Undergraduate Consortium
                                    </div>
                                    <div className="pt-2">
                                        <Button href="/files/AAAI_UC_Proposal.pdf" text="PDF" external/>
                                    </div>
                                    <div className="text-base/6 pt-4">
                                        Human Computer Interaction for Brain Computer Interfaces with Reinforcement Learning
                                    </div>
                                    <div className="pt-2 text-graysubtitle text-sm md:text-base">
                                        UBC Multifaceted Innovations in Neurotechnology (MINT)
                                    </div>
                                    <div className="pt-2">
                                        <Button href="/files/HCI_BCI_Lit_Review.pdf" text="PDF" external/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-10 text-newgray mx-8 md:mx-0"/>
                </section>

                {/* MORE SECTION */}
                <section
                    id="more"
                    className="flex flex-col min-h-screen md:pt-5 pb-20 scroll-mt-12"
                >
                    <div id="more-marker" className="h-1 w-full" />
                    <div className="pl-8 md:pt-10 pt-8 pr-8 md:pr-0">
                        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:pr-16 flex flex-col">
                            <div className={`flex flex-col col-start-1 md:text-2xl text-xl ${font_med.className}`}>
                                More
                            </div>
                            <div className="flex flex-col col-start-2 col-span-2">
                                <div className={`text-lg pt-2 md:pt-0 ${font_med.className}`}>
                                    Web Development
                                </div>
                                <div className="pt-4">
                                    <a target="_blank" rel="noopener noreferrer" href="https://voythos.io">
                                        <div className="cursor-pointer hover:opacity-75 transition duration-300 ease-in">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                className="object-cover"
                                                style={{ width: '100%', height: '100%'}}
                                            >
                                                <source src="/videos/voythos.mp4" type="video/mp4"/>
                                            </video>
                                        </div>
                                    </a>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://voythos.io">
                                    <div className="pt-3 md:text-lg text-base underline underline-offset-4 cursor-pointer hover:opacity-50 transition duration-300 ease-in">
                                        Voythos
                                    </div>
                                </a>
                                <div className="pt-8">
                                    <a target="_blank" rel="noopener noreferrer" href="https://ubcballet.vercel.app/">
                                        <Image 
                                            src='/images/ubcballet.svg'
                                            alt="UBC Ballet Web"
                                            height={500}
                                            width={500}
                                            className="bg-cover cursor-pointer hover:opacity-75 transition duration-300 ease-in"
                                        />
                                    </a>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://ubcballet.vercel.app/">
                                    <div className="pt-3 md:text-lg text-base underline underline-offset-4 cursor-pointer hover:opacity-50 transition duration-300 ease-in">
                                        UBC Ballet 2024-2025
                                    </div>
                                </a>
                                <div className="pt-8">
                                    <a target="_blank" rel="noopener noreferrer" href="https://kyralee.vercel.app/">
                                        <Image 
                                            src='/images/kyra.svg'
                                            alt="Kyra Lee Portfolio"
                                            height={500}
                                            width={500}
                                            className="bg-cover cursor-pointer hover:opacity-75 transition duration-300 ease-in"
                                        />
                                    </a>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://kyralee.vercel.app/">
                                    <div className="pt-3 md:text-lg text-base underline underline-offset-4 cursor-pointer hover:opacity-50 transition duration-300 ease-in">
                                        Kyra Lee Portfolio
                                    </div>
                                </a>
                                <div className={`text-lg pt-8 ${font_med.className}`}>
                                    Creative Code
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-5 pr-5">
                                    <div className="w-full">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            className="object-cover"
                                            style={{ width: '100%', height: '100%'}}
                                        >
                                            <source src="/videos/coordinates.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <div className="w-full">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            className="object-cover"
                                            style={{ width: '100%', height: '100%'}}
                                        >
                                            <source src="/videos/flow.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3 mt-3 pr-5">
                                    <div className="w-full">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            className="object-cover"
                                            style={{ width: '100%', height: '100%'}}
                                        >
                                            <source src="/videos/loading.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <div className="w-full">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            className="object-cover"
                                            style={{ width: '100%', height: '100%'}}
                                        >
                                            <source src="/videos/typography.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <div className="w-full">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            className="object-cover"
                                            style={{ width: '100%', height: '100%'}}
                                        >
                                            <source src="/videos/generative.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainPage;