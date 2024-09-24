import styled from "styled-components";

const BannerStyle = styled.div`
   position: absolute;
   top: 192px;
   right: 0;
   display: flex;
   justify-content: end;
`;

const ImgStyled = styled.img`
   object-fit: cover;
   border-radius: 10px;
   width: 1156px;
   height: 328px;
   flex-shrink: 0;

   @media (max-width: 1440px) {
      width: 1000px;
      height: 300px;
   }

   @media (max-width: 1366px) {
      width: 900px;
      height: 275px;
   }

   @media (max-width: 1280px) {
      width: 850px;
      height: 250px;
   }

   @media (max-width: 1200px) {
      width: 800px;
      height: 240px;
   }

   @media (max-width: 1100px) {
      width: 750px;
      height: 225px;
   }

   @media (max-width: 1024px) {
      width: 700px;
      height: 200px;
   }

   @media (max-width: 900px) {
      width: 600px;
      height: 180px;
   }

   @media (max-width: 800px) {
      width: 500px;
      height: 150px;
   }

   @media (max-width: 768px) {
      display: none;
   }
`;

const Banner = () => {
   return (
      <BannerStyle>
         <ImgStyled src="/imagens/banner.jpeg" alt="banner" />
      </BannerStyle>
   );
};

export default Banner;
