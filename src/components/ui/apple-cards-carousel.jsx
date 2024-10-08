import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarouselContext = createContext({
   onCardClose: () => {},
   currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
   const carouselRef = React.useRef(null);
   const [canScrollLeft, setCanScrollLeft] = React.useState(false);
   const [canScrollRight, setCanScrollRight] = React.useState(true);
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      if (carouselRef.current) {
         carouselRef.current.scrollLeft = initialScroll;
         checkScrollability();
      }
   }, [initialScroll]);

   const checkScrollability = () => {
      if (carouselRef.current) {
         const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
         setCanScrollLeft(scrollLeft > 0);
         setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
   };

   const scrollLeft = () => {
      if (carouselRef.current) {
         carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
   };

   const scrollRight = () => {
      if (carouselRef.current) {
         carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
   };

   const handleCardClose = (index) => {
      if (carouselRef.current) {
         const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
         const gap = isMobile() ? 4 : 8;
         const scrollPosition = (cardWidth + gap) * (index + 1);
         carouselRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
         });
         setCurrentIndex(index);
      }
   };

   const isMobile = () => {
      return window && window.innerWidth < 768;
   };

   return (
      <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
         <div className='relative w-full'>
            <div
               className='flex w-full overflow-x-scroll overscroll-x-auto py-10 md:pt-14 scroll-smooth [scrollbar-width:none]'
               ref={carouselRef}
               onScroll={checkScrollability}
            >
               <div className={cn('absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l')}></div>

               <div
                  className={cn(
                     'flex flex-row justify-start gap-4 pl-4',
                     // remove max-w-4xl if you want the carousel to span the full width of its container
                     'max-w-7xl mx-auto'
                  )}
               >
                  {items.map((item, index) => (
                     <motion.div
                        initial={{
                           opacity: 0,
                           y: 20,
                        }}
                        animate={{
                           opacity: 1,
                           y: 0,
                           transition: {
                              duration: 0.5,
                              delay: 0.2 * index,
                              ease: 'easeOut',
                              once: true,
                           },
                        }}
                        key={'card' + index}
                        className='last:pr-[5%] md:last:pr-[33%]  rounded-3xl'
                     >
                        {item}
                     </motion.div>
                  ))}
               </div>
            </div>
            <div className='flex justify-center gap-4'>
               <button
                  className='relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50'
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
               >
                  <IconArrowNarrowLeft className='h-6 w-6 text-gray-500' />
               </button>
               <button
                  className='relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50'
                  onClick={scrollRight}
                  disabled={!canScrollRight}
               >
                  <IconArrowNarrowRight className='h-6 w-6 text-gray-500' />
               </button>
            </div>
         </div>
      </CarouselContext.Provider>
   );
};

export const Card = ({ card, index, layout = false }) => {
   const [open, setOpen] = useState(false);
   const containerRef = useRef(null);
   const { onCardClose, currentIndex } = useContext(CarouselContext);

   useEffect(() => {
      function onKeyDown(event) {
         if (event.key === 'Escape') {
            handleClose();
         }
      }

      if (open) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }

      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
   }, [open]);

   useOutsideClick(containerRef, () => handleClose());

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
      onCardClose(index);
   };

   return (
      <>
         <AnimatePresence>
            {open && (
               <div className='inset-0 h-screen z-50 overflow-auto'>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className='bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0'
                  />
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     ref={containerRef}
                     layoutId={layout ? `card-${card.title}` : undefined}
                     className='max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-6 rounded-3xl font-sans relative'
                  >
                     <button
                        className='sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center'
                        onClick={handleClose}
                     >
                        <IconX className='h-6 w-6 text-white dark:text-neutral-900' />
                     </button>
                     <motion.p
                        layoutId={layout ? `category-${card.title}` : undefined}
                        className='text-lg md:text-3xl font-semibold text-black dark:text-white'
                     >
                        {card.title}
                     </motion.p>
                     <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className='text-xs md:text-base text-black mt-4 dark:text-white'
                     >
                        {card.description}
                     </motion.p>
                     <div className='py-10'>{card.description}</div>
                  </motion.div>
               </div>
            )}
         </AnimatePresence>
         <motion.button
            layoutId={layout ? `card-${card.title}` : undefined}
            onClick={handleOpen}
            className='rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[32rem] w-56 sm:w-48 md:h-[30rem] md:w-[20rem] xl:h-[42rem] overflow-hidden flex flex-col items-start justify-start relative z-10'
         >
            <div className='absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none' />
            <div className='relative z-40 p-8 '>
               <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className='text-white text-lg md:text-2xl font-semibold max-w-xs text-left[text-wrap:balance] font-sans mt-2 bg-sky-500 px-3 py-2 rounded-md opacity-95 underline shadow-2xl '
               >
                  {card.title}
               </motion.p>
            </div>
            <BlurImage
               src={card.src}
               alt={card.title}
               fill
               className='object-cover xl:object-contain absolute z-10 inset-0 h-full w-full'
            />

            <div className='absolute z-40 p-2 bottom-1 left-2'>
               <motion.p
                  layoutId={layout ? `category-${card.category}` : undefined}
                  className='text-white text-sm md:text-base font-medium font-sans text-left flex'
               >
                  <div className='bg-slate-200 p-2 sm:p-4 rounded-xl shadow-slate-800 shadow-md opacity-95'>
                     <div className='flex gap-1 sm:gap-3 mb-2 sm:justify-center justify-start'>
                        {card.logo.map((logo, i) => (
                           <img
                              src={logo}
                              alt='logo'
                              key={logo}
                              className='w-7 h-6'
                           />
                        ))}
                     </div>

                     <div className='group'>
                        <FontAwesomeIcon
                           icon={faLink}
                           className='text-green-700 mr-3 group-hover:text-blue-600'
                        />
                        <Link
                           to={card.link}
                           className='text-slate-600 sm:text-lg  group-hover:text-blue-600'
                        >
                           {card.linkText}
                        </Link>
                     </div>
                     <div className='group'>
                        <FontAwesomeIcon
                           icon={faLink}
                           className='text-green-700 mr-3 group-hover:text-blue-600'
                        />
                        <Link
                           to={card.liveLink}
                           className='text-slate-600 sm:text-lg group-hover:text-blue-600'
                        >
                           {card.liveLinkText}
                        </Link>
                     </div>
                  </div>
               </motion.p>
            </div>
         </motion.button>
      </>
   );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
   const [isLoading, setLoading] = useState(true);
   return (
      <img
         className={cn('transition duration-300', isLoading ? 'blur-sm' : 'blur-0', className)}
         onLoad={() => setLoading(false)}
         src={src}
         width={width}
         height={height}
         loading='lazy'
         decoding='async'
         blurDataURL={typeof src === 'string' ? src : undefined}
         alt={alt ? alt : 'Background of a beautiful view'}
         {...rest}
      />
   );
};
