import React from "react";
import { useTranslations } from 'next-intl';
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  const t = useTranslations('services');

  return (
    <>
      <SectionIntro
        eyebrow={t('title')}
        title={t('subtitle')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every line of code we write serves a purpose: growing your business. Whether you're a startup racing to market
          or an established company ready to modernize, we craft digital solutions that work as hard as you do.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                alt="Modern web development workspace showing responsive design and clean code"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title={t('webDevelopment.title')}>
              {t('webDevelopment.description')}
            </ListItem>
            <ListItem title={t('applicationDevelopment.title')}>
              {t('applicationDevelopment.description')}
            </ListItem>
            <ListItem title={t('eCommerce.title')}>
              {t('eCommerce.description')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
