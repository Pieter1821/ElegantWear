import styled from 'styled-components';

export const Hero = styled.section`
  width: 100%;
  min-height: 420px;
  /* soft neutral gradient hero (clean, modern look) */
  background-image: linear-gradient(180deg, #cfcfd2 0%, #eef0f3 100%);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #ffffff; /* headline is intentionally white on the soft gradient */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 16px;
  box-sizing: border-box;
`;

export const HeroInner = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 28px;
  padding: 18px 6px;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

export const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-right: 6px;
`;

export const Headline = styled.h1`
  font-size: 54px;
  margin: 0;
  line-height: 1.03;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 34px;
  }
`;

export const Sub = styled.p`
  margin: 0;
  color: rgba(0,0,0,0.6);
  max-width: 48rem;
  font-size: 16px;
`;

export const HeroMedia = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const ButtonGroup = styled.div`
  display:flex;
  gap:12px;
  margin-top:6px;
`;

export const PrimaryButton = styled.button`
  padding:10px 18px;
  border-radius:8px;
  background: #111;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(17,17,17,0.08);
  white-space: nowrap;
`;

export const SecondaryButton = styled.button`
  padding:10px 18px;
  border-radius:8px;
  background: #fff;
  color: #222;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
  white-space: nowrap;
`;

export const FeatureCard = styled.div`
  width:100%;
  height: 260px;
  background: #fff;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: 0 18px 40px rgba(0,0,0,0.06);
  padding: 18px;
  box-sizing: border-box;
  color: #888;
`;
