import { GalleryItem } from '../types';

// Curated generated high-resolution assets
import heroSash from '../assets/images/hero_sash_window_1791445146114.jpg';
import craftsmanRepair from '../assets/images/gallery_craftsman_repair_1791445171838.jpg';
import doubleGlaze from '../assets/images/gallery_heritage_double_glaze_1791445188493.jpg';
import casementFinish from '../assets/images/gallery_casement_finish_1791445200859.jpg';

/**
 * 15 GALLERY IMAGE SLOTS
 * You can replace the 'imageUrl' values below with your own 10-15 image URLs,
 * or use the interactive "Image URLs Manager" button right on the website!
 */
export const initialGalleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Mayfair Townhouse Bay Sash Restoration",
    category: "sash",
    period: "Victorian (c. 1885)",
    location: "Berkeley Square, Mayfair, London",
    description: "Complete overhaul of triple bay box sash windows near Berkeley Square. Replaced worn cords, installed hidden draught-proofing brush pile, balanced counterweights, and restored original brass fittings.",
    imageUrl: heroSash,
    isPlaceholder: false
  },
  {
    id: 2,
    title: "Accoya Timber Rot & Sill Splicing",
    category: "rot-repair",
    period: "Georgian (c. 1790)",
    location: "Richmond upon Thames",
    description: "Extensive wet rot repair to bottom box sill and lower meeting rails. Precision spliced rot-proof Accoya timber to preserve 95% of original historic joinery.",
    imageUrl: craftsmanRepair,
    isPlaceholder: false
  },
  {
    id: 3,
    title: "Heritage Slimline Double Glazing Retrofit",
    category: "double-glazing",
    period: "Georgian Townhouse",
    location: "Bath, Somerset",
    description: "Retrofitting ultra-slim 11mm vacuum insulated double glazing into original period timber sashes. Zero alteration to exterior profile, preserving Grade II listed aesthetic.",
    imageUrl: doubleGlaze,
    isPlaceholder: false
  },
  {
    id: 4,
    title: "Cottage Timber Casement Overhaul",
    category: "casement",
    period: "Edwardian (c. 1905)",
    location: "Guildford, Surrey",
    description: "Handcrafted timber casement window repair with heritage bronze stays, weatherstrip perimeter seals, and hand-applied microporous satin enamel finish.",
    imageUrl: casementFinish,
    isPlaceholder: false
  },
  {
    id: 5,
    title: "Period Townhouse 6-over-6 Sash Windows",
    category: "heritage",
    period: "Late Georgian (c. 1820)",
    location: "Marylebone, London",
    description: "Meticulous restoration of twelve 6-over-6 multi-pane sash windows with fine glazing bars, re-puttied glass, and smooth counter-balanced gliding mechanism.",
    // SLOT 5: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 6,
    title: "Draught-Proofed Dining Room Bay Window",
    category: "sash",
    period: "Victorian (c. 1895)",
    location: "Islington, London",
    description: "Eliminated whistling winter draughts and street noise rattles using our concealed 4-point perimeter brush pile system. Smooth fingertip glide achieved.",
    // SLOT 6: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 7,
    title: "Acoustic Glass Retrofit on Busy Avenue",
    category: "double-glazing",
    period: "Edwardian (c. 1910)",
    location: "Hampstead, London",
    description: "Fitted sound-deadening acoustic laminate glazing into existing box sash frames, reducing external traffic noise by up to 38dB.",
    // SLOT 7: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 8,
    title: "Historic Schoolhouse Arched Sash Windows",
    category: "heritage",
    period: "Victorian Gothic (c. 1878)",
    location: "Oxford, Oxfordshire",
    description: "Custom curved timber arch restoration with bespoke hand-turned mouldings, heritage lead weights, and full conservation officer approval.",
    // SLOT 8: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 9,
    title: "Sub-Sill Rebuild & Stone Masonry Seal",
    category: "rot-repair",
    period: "Victorian Villa",
    location: "Wimbledon, London",
    description: "Excavation of dry rot infected hardwood sills, installation of lead damp proof trays, and seamless mortar pointing against exterior Portland stone.",
    // SLOT 9: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 10,
    title: "French Casement Balcony Doors Overhaul",
    category: "casement",
    period: "Edwardian (c. 1908)",
    location: "Chiswick, London",
    description: "Realigned dropped timber French doors opening onto first-floor balcony. Renewed multi-point compression seals and polished antique brass cremone bolts.",
    // SLOT 10: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 11,
    title: "Slim Double Glazed Master Bedroom Sashes",
    category: "double-glazing",
    period: "Georgian (c. 1815)",
    location: "Greenwich, London",
    description: "Upgraded single pane glass to argon-filled heritage double glazing units with warm edge spacers, eliminating morning window condensation entirely.",
    // SLOT 11: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 12,
    title: "Traditional Cord & Pulley Rebalancing",
    category: "sash",
    period: "Victorian (c. 1890)",
    location: "Clapham, London",
    description: "Replaced snapped cotton cords with pre-stretched wax-impregnated braided jute cords rated for 150kg. Serviced original cast iron ball-bearing pulleys.",
    // SLOT 12: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 13,
    title: "Grade II Listed Manor House Restoration",
    category: "heritage",
    period: "Queen Anne / Early Georgian",
    location: "St Albans, Hertfordshire",
    description: "Conservation grade restoration of 24 original timber frames adhering strictly to English Heritage conservation guidance and SPAB principles.",
    // SLOT 13: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 14,
    title: "Accoya Timber Window Stile Replacement",
    category: "rot-repair",
    period: "Victorian Semi-Detached",
    location: "Dulwich, London",
    description: "Rotten vertical stiles replaced with sustainably sourced Accoya acetylated wood. Includes 50-year warranty against rot and insect decay above ground.",
    // SLOT 14: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  },
  {
    id: 15,
    title: "Hand-Painted Exterior Finish in Heritage Off-White",
    category: "casement",
    period: "Late Victorian (c. 1898)",
    location: "Barnes, London",
    description: "Three-coat breathable microporous paint application in classic Little Greene 'Slaked Lime'. Prevents timber moisture trapping and peeling for 8+ years.",
    // SLOT 15: User can update with custom image URL
    imageUrl: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true
  }
];
