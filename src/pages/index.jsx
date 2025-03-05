import React from 'react';
import styled from 'styled-components';


const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    margin: 0;
    padding: 0;
`;

const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomeRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-width: 100%;
`;

const HomeMiddle = styled.div`
    align-items: center;
    justify-content: center;
    background-color: #4e4a42;
    padding: 10vw 5vw 8vw 5vw;
    align-items: center;
`;

const HomeHfont = styled.h2`
    color: #4e4a42;
    margin-left: 5rem;
    margin-right: 5rem;
    font-size: calc(15px + 1.5vw);
`;
 
const HomePfont = styled.p`
     color: #4e4a42;
     font-size: calc(10px + 1vw);
     margin-left: 5vw;
     margin-right: 5vw;
     text-align: center;
`;

const MiddlePfont = styled.p`
    color: #ffffff;
    text-align: left;
    font-size: calc(10px + 1vw);
`;

const MiddleHfont = styled.h2`
    color: #ffffff;
    font-size: calc(15px + 1.5vw);
    
`;

const HomeImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 45vw;
    object-fit: contain;
    display: block; 
    margin: 0;
`;



const SampleImage = styled.img`
    width: 50vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;  

const Home = () => {
    return(
        <div>
        <HomeContainer>
            <HomeLeft>
                <HomeHfont>Scientifically Crafted Eastern Food Healing</HomeHfont>
                <HomePfont>Crafted from grass-fed bovine bone broth, 
                    our blend includes organic wild yam,
                    goji berry and lion's mane mushroom.
                --- nothing more, nothing less.
                </HomePfont>
            </HomeLeft>
            <HomeRight>
                <HomeImage src ="../../public/homepage.avif" alt="This is the Home Page Photo"/>
            </HomeRight>
        </HomeContainer>
        <HomeMiddle>
            <SampleImage src="../../public/samplebag.avif" alt="This is a photo of a sample bag"/>
            <MiddleHfont>A COMPLETE BONE BROTH for your gut</MiddleHfont>
            <MiddlePfont> We Believe in the Power of Food as Medicine</MiddlePfont>
            <MiddlePfont>The ancient tradition of combining animal bones with vegetables and herbs has deep roots in Eastern cultures, 
                offering a variety of health benefits. 
                Our blend is carefully crafted with scientifically proven ingredients designed to tonify Spleen Qi—an essential energy that, 
                when deficient, can lead to symptoms common in modern life, 
                such as bloating, loose bowel movements, fatigue, and brain fog. 
                Read more about the benefits of our selected ingredients.
            </MiddlePfont>
            <MiddlePfont>
                Our blends feature 100% grass-fed bovine bone broth powder, 
                complemented by organic, rigorously tested ingredients. 
                These ingredients undergo the most stringent pesticide and heavy metal testing and are manufactured in FDA-approved, GMP-certified facilities in the U.S. 
                Our products are gluten-free, grain-free, soy-free, dairy-free, and non-GMO.
            </MiddlePfont>
            <MiddlePfont>We are preparing to launch a trial with Traditional Chinese Medicine practitioners across the U.S., 
                ensuring that only the most research-backed products reach your hands. 
                Stay tuned as we will soon share more scientific insights on our formulation.
            </MiddlePfont>
            <MiddlePfont>Our mission is to showcase the real power of Eastern food healing, 
                meticulously preparing our products to deliver those benefits to you.
            </MiddlePfont>
        </HomeMiddle>
        </div>
    );
};

export default Home;