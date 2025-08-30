import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import CategoryMenu from '../../components/category-menu/category-menu';
import { Hero, HeroInner, HeroCopy, Headline, Sub, HeroMedia, ButtonGroup, PrimaryButton, SecondaryButton, FeatureCard } from './home.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Home = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const featured = useMemo(() => {
    const keys = Object.keys(categoriesMap).slice(0, 3);
    return keys.flatMap((k) => categoriesMap[k]?.slice(0, 1) ?? []);
  }, [categoriesMap]);

  let Carousel: any = null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Carousel = require('primereact/carousel').Carousel;
  } catch (e) {
    Carousel = null;
  }

  return (
    <div>
      <Outlet />
      <Hero>
        <HeroInner className="container">
          <HeroCopy>
            <Headline>Shop modern styles — ethically made.</Headline>
            <Sub>Discover curated collections across clothing, footwear and accessories. Fast shipping, easy returns.</Sub>
            <ButtonGroup>
              <a href="/shop" style={{textDecoration:'none'}}>
                <PrimaryButton>Shop All</PrimaryButton>
              </a>
              <a href="/shop" style={{textDecoration:'none'}}>
                <SecondaryButton>Browse Collections</SecondaryButton>
              </a>
            </ButtonGroup>
          </HeroCopy>
          <HeroMedia>
            {Carousel && featured.length > 0 ? (
              <Carousel value={featured} numVisible={1} numScroll={1} circular>
                {featured.map((p:any) => (
                  <div key={p.id} style={{padding:12}}>
                    <img src={p.imageUrl} alt={p.name} style={{width:'100%', borderRadius:8}} />
                  </div>
                ))}
              </Carousel>
            ) : (
              <FeatureCard>
                <span>Featured products will appear here</span>
              </FeatureCard>
            )}
          </HeroMedia>
        </HeroInner>
      </Hero>
      <CategoryMenu />
    </div>
  );
};

export default Home;



