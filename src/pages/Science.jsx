import styled from "styled-components";

const ScienceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    margin: 0;
    padding: 0;
`;

const ScienceLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ScienceRight = styled.div`
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-width: 100%;
`;

const ScienceHfont = styled.h2`
    color: #4e4a42;
    margin-left: 5rem;
    margin-right: 5rem;
    font-size: calc(15px + 1vw);
`;
 
const SciencePfont = styled.p`
     color: #4e4a42;
     font-size: calc(10px + 1vw);
     margin-left: 5vw;
     margin-right: 5vw;
     text-align: center;
`;

const ScienceRightFont = styled.p`
    text-align: left;
    font-size: calc(10px + 1vw);
`;
const ScienceList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5vw;
    margin-right: 5vw;
    font-size: calc(5px + 1vw);
`

const ScienceListItem = styled.li`
    margin-bottom: 1rem;
`;

const ScienceImage = styled.img`
    width: 25vw;
    height: auto;
    margin-bottom: 10rem;
`;
const Science = () => {
    return(
        <ScienceContainer>
            <ScienceLeft>
                <ScienceHfont>Our Ingredients</ScienceHfont>
                <SciencePfont>
                    Crafted from grass-fed bovine bone broth, 
                    our blend includes organic wild yam,
                    goji berry and lion's mane mushroom.</SciencePfont>
                    <SciencePfont>— nothing more, nothing less.</SciencePfont>
                <ScienceImage src="../../public/powder.avif" alt="this is a photo of powder"/>
            </ScienceLeft>
            <ScienceRight>
                <ScienceRightFont>
                    Chinese Wild Yam (Dioscorea Polystachya)</ScienceRightFont>
                <ScienceList>
                    <ScienceListItem>"'Yam gruel' mediates gut microbiota and its metabolites, regulates oxidative stress,
                        and inflammatory response, promotes the expression of neurotransmitter and BDNF and improves cognitive function" (Pang et al., 2020).
                    </ScienceListItem>
                    <ScienceListItem>"Dioscorea provides health benefits including antioxidant activity, anti-inflammatory activity, gastrointestinal protection,
                        gut microbiota regulation, cardiac disease treatment, hypoglycemic activity, anti-tumor activity, and estrogen-like effect." (Li et al., 2023).
                    </ScienceListItem>
                </ScienceList>
                <ScienceRightFont>Lion's Mane Mushroom (Hericium erinaceus)
                </ScienceRightFont>
                <ScienceList>
                    <ScienceListItem>"Hericium erinaceus maintains intestinal barrier integrity, and increases the diversity and richness of gut microbiota." (Li et al., 2021).
                    </ScienceListItem>
                    <ScienceListItem>"H. erinaceus is capable of fortifying the spleen and nourishing the stomach, tranquilizing the mind,
                        and fighting cancer, thus can be widely used for the treatment of various diseases, including body deficiency and weakness,
                        dyspepsia, insomnia, gastric and duodenal ulcer, chronic gastritis, and digestive tract tumor." (He et al., 2017).
                    </ScienceListItem>
                    <ScienceListItem>"H. erinaceus polysaccharides and fungal immunomodulatory proteins have been reported to modulate gut microbiota."
                        (Li et al., 2017; Chaiyasut and Sivamaruthi, 2017).
                    </ScienceListItem></ScienceList>
            </ScienceRight>
        </ScienceContainer>
    );
};

export default Science;